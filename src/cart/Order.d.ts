import { Address } from "./Address";
import { Package } from "./Package";
export type Order = Readonly<{
    address: Address;
    package: Package;
}>;
