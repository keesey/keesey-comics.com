import type { ProductType } from "./ProductType"
import type { ShippingOption } from "./ShippingOption"
export type ContainerQuantity = Readonly<{
  maximum: number
  productType: ProductType
  shippingOption?: ShippingOption
}>
