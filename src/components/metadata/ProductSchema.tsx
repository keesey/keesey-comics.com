import { FC, useMemo } from "react"
import { Product } from "schema-dts"
import { Product as ProductModel } from "~/cart/models/Product"
import Schema from "./Schema"
export interface Props {
    product?: ProductModel
}
const GRAMS_PER_OUNCE = 28.3495
const ProductSchema: FC<Props> = ({ product }) => {
    const thing = useMemo<Product | null>(
        () =>
            product
                ? {
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
                  }
                : null,
        [product],
    )
    if (!thing) {
        return null
    }
    return <Schema thing={thing} />
}
export default ProductSchema
