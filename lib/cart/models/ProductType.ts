import type { ReactNode } from "react"
import type { ShippingOption } from "./ShippingOption"
export type ProductType = Readonly<{
  details: ReactNode
  id: string
  maximum: number
  name: string
  ounces: number
  value: number
  shippingOptions?: readonly ShippingOption[]
}>
