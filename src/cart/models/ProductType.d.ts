import { ShippingOption } from "./ShippingOption";
export type ProductType = Readonly<{
    html: string;
    id: string;
    name: string;
    ounces: number;
    value: number;
    shippingOptions?: readonly ShippingOption[]; 
}>;
