import { ShippingOption } from "./ShippingOption";
export type ProductType = Readonly<{
    id: string;
    name: string;
    ounces: number;
    value: number;
    shippingOptions?: readonly ShippingOption[]; 
}>;
