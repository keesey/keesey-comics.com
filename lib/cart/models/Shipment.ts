import type { Address } from "./Address"
import type { Package } from "./Package"
export type Shipment = Readonly<{
  address: Address
  package: Package
}>
