import { ProductType } from "./ProductType"
import { ShippingOption } from "./ShippingOption"
export type ContainerQuantity = Readonly<{
    maximum: number
    productType: ProductType
    shippingOption?: ShippingOption
}>
