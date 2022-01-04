import { ProductType } from "./ProductType";
export type Product = Readonly<{
    html: string;
    id: string;
    imagePath?: string;
    name: string;
    path?: string;
    type: ProductType;
}>;
