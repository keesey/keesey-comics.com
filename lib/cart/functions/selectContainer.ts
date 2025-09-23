import { CONTAINERS } from "../constants/CONTAINERS"
import { PRODUCTS_MAP } from "../constants/PRODUCTS"
import { Container } from "../models/Container"
import { Order } from "../models/Order"
import { ProductType } from "../models/ProductType"
const getVolume = (c: Container) =>
  c.dimensions.reduce<number>((prev, measurement) => prev * measurement, 1)
const compareContainersByVolume = (a: Container, b: Container) => {
  if (a === b) {
    return 0
  }
  return getVolume(a) - getVolume(b)
}
const getShippingOptionIdForProductType = (order: Order, type: ProductType) => {
  return order.shippingOptionIds.find(id =>
    type.shippingOptions?.some(option => option.id === id),
  )
}
export const selectContainer = (order: Order): Container | undefined => {
  return CONTAINERS.filter(container =>
    order.items.every(({ productId, quantity }) =>
      container.quantities.some(
        ({ maximum, productType, shippingOption }) =>
          PRODUCTS_MAP[productId].type.id === productType.id && // Accommodates the product type
          (!shippingOption ||
            shippingOption.id ===
              getShippingOptionIdForProductType(
                order,
                PRODUCTS_MAP[productId].type,
              )) && // Includes the shipping option (if any)
          quantity <= maximum, // Quantity does not exceed maximum
      ),
    ),
  ).sort(compareContainersByVolume)[0]
}
