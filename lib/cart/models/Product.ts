import type { AppRoute } from "next/dist/build/swc/types"
import type { ProductType } from "./ProductType"
import type { LinkProps } from "next/link"
export type Product = Readonly<{
  html: string
  id: string
  imagePath?: string
  name: string
  path?: LinkProps<AppRoute>["href"]
  type: ProductType
}>
