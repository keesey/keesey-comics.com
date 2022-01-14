import { Address } from "./Address"
import { Package } from "./Package"
export type Shipment = Readonly<{
    address: Address
    package: Package
}>
