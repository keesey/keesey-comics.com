"use server"
import { PRODUCTS_MAP } from "../constants/PRODUCTS"
import { SHIPPING_OPTIONS_MAP } from "../constants/SHIPPING_OPTIONS"
import type { Address } from "../models/Address"
import type { Costs } from "../models/Costs"
import type { Order } from "../models/Order"
import type { Package } from "../models/Package"
import type { ProductType } from "../models/ProductType"
import { calculateShipping } from "./calculateShipping"
import { selectContainer } from "./selectContainer"
const PAYPAL_TRANSACTION_RATE = 0.0289
const PAYPAL_TRANSACTION_FEE = 0.49
const getShippingOption = (
  ids: readonly string[],
  productType: ProductType,
) => {
  if (!productType.shippingOptions) {
    return undefined
  }
  const id =
    ids.find(id =>
      productType.shippingOptions!.some(option => option.id === id),
    ) ?? productType.shippingOptions[0].id
  return SHIPPING_OPTIONS_MAP[id]
}
export const calculateCosts = async (
  order: Order,
  address: Address,
): Promise<Costs | undefined> => {
  // :TODO: Allow grouping into multiple containers.
  const container = selectContainer(order)
  if (!container) {
    return undefined
  }
  const [ounces, handling, products, shippingAdditional, salesTax] =
    order.items.reduce<[number, number, number, number, number]>(
      (
        [
          prevOunces,
          prevHandling,
          prevProducts,
          prevShippingAdditional,
          prevSalesTax,
        ],
        { productId, quantity },
      ) => {
        const product = PRODUCTS_MAP[productId]
        const shippingOption = getShippingOption(
          order.shippingOptionIds,
          product.type,
        )
        return [
          prevOunces +
            product.type.ounces +
            (shippingOption ? quantity * shippingOption.ounces : 0),
          prevHandling + quantity * Number(process.env.HANDLING_RATE),
          prevProducts + quantity * product.type.value,
          prevShippingAdditional +
            (shippingOption ? quantity * shippingOption.value : 0),
          prevSalesTax +
            quantity *
              Number(
                (
                  product.type.value * Number(process.env.NEXT_PUBLIC_SALES_TAX)
                ).toFixed(2),
              ),
        ]
      },
      [container.ounces, 0, 0, 0, 0],
    )
  const pkg: Package = {
    dimensions: container.dimensions,
    ounces,
    value: container.value + products,
  }
  const shipping = await calculateShipping({ address, package: pkg })
  const processingSubtotal =
    pkg.value + shipping + shippingAdditional + handling + salesTax
  const totalWithProcessing = Number(
    (
      (processingSubtotal + PAYPAL_TRANSACTION_FEE) /
      (1 - PAYPAL_TRANSACTION_RATE)
    ).toFixed(2),
  )
  const processing = totalWithProcessing - processingSubtotal
  return {
    containers: container.value,
    handling,
    products,
    processing,
    salesTax,
    shipping,
    shippingAdditional,
  }
}
