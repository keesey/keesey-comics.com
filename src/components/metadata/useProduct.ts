import { useMemo } from "react";
import { Product } from "schema-dts";
import { Product as ProductModel } from "~/cart/models/Product";
const GRAMS_PER_OUNCE = 28.3495;
const useProduct = (product: ProductModel) => {
  return useMemo<Product | null>(
    () =>
      product
        ? {
            "@type": "Product",
            description: product.type.name,
            name: product.name,
            productID: product.id,
            url: `https://www.keesey-comics.com/products/${encodeURIComponent(
              product.id
            )}`,
            weight: {
              "@type": "QuantitativeValue",
              unitCode: "GRM",
              value: (product.type.ounces * GRAMS_PER_OUNCE).toPrecision(3),
            },
          }
        : null,
    [product]
  );
};
export default useProduct;
