import { ContainerQuantity } from "./ContainerQuantity"
import { Package } from "./Package"
export type Container = Package &
    Readonly<{
        quantities: readonly ContainerQuantity[]
    }>
