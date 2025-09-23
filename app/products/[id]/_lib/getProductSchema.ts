import { Product as ProductModel } from "@/lib/cart/models/Product"
import { Product as ProductSchema } from "schema-dts"
const GRAMS_PER_OUNCE = 28.3495
export const getProductSchema = (product: ProductModel): ProductSchema => ({
  "@type": "Product",
  description: product.type.name,
  name: product.name,
  productID: product.id,
  url: `https://www.keesey-comics.com/products/${encodeURIComponent(product.id)}`,
  weight: {
    "@type": "QuantitativeValue",
    unitCode: "GRM",
    value: (product.type.ounces * GRAMS_PER_OUNCE).toPrecision(3),
  },
})
