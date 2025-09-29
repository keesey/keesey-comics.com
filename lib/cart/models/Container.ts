import type { ContainerQuantity } from "./ContainerQuantity"
import type { Package } from "./Package"
export type Container = Package &
  Readonly<{
    quantities: readonly ContainerQuantity[]
  }>
