import { Theme } from "~/themes/Theme"
import { ProductType } from "./ProductType"
export type Product = Readonly<{
    html: string
    id: string
    imagePath?: string
    name: string
    path?: string
    theme?: Theme
    type: ProductType
}>
