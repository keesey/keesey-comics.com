"use client"
import { Definition, DefinitionTerm } from "@/components/Definitions"
import { SHIPPING_OPTIONS_MAP } from "@/lib/cart/constants/SHIPPING_OPTIONS"
import { Context } from "@/lib/cart/context/order/Context"
import type { ProductType } from "@/lib/cart/models/ProductType"
import type { ShippingOption as ShippingOptionModel } from "@/lib/cart/models/ShippingOption"
import { useContext, useMemo } from "react"
export interface ShippingOptionProps {
  productType: ProductType
}
export const ShippingOption = ({ productType }: ShippingOptionProps) => {
  const [order] = useContext(Context) ?? []
  const shippingOption = useMemo<ShippingOptionModel | undefined>(() => {
    if (!productType.shippingOptions) {
      return undefined
    }
    const id =
      order?.shippingOptionIds.find(id =>
        productType.shippingOptions!.some(option => option.id === id),
      ) ?? productType.shippingOptions[0].id
    return SHIPPING_OPTIONS_MAP[id]
  }, [productType, order?.shippingOptionIds])
  if (!shippingOption) {
    return null
  }
  return (
    <>
      <DefinitionTerm>Packaging</DefinitionTerm>
      <Definition>{shippingOption.name}</Definition>
    </>
  )
}
