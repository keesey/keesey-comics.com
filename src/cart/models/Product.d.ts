import { ProductType } from "./ProductType";
export type Product = Readonly<{
    html: string;
    id: string;
    name: string;
    type: ProductType;
}>;
