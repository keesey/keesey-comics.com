import { Product } from "./Product";
import { Container } from "./Container";
import { Order } from "./Order";
const fits = (maxProducts: number | undefined, numProducts: number) =>
  typeof maxProducts === "number" && maxProducts >= numProducts;
const getVolume = (c: Container) =>
  c.dimensions.reduce<number>((prev, measurement) => prev * measurement, 1);
const compareContainersByVolume = (a: Container, b: Container) => {
  if (a === b) {
    return 0;
  }
  return getVolume(a) - getVolume(b);
};
const selectContainer = (
  order: Order,
  containers: Iterable<Container>,
  products: Readonly<Record<string, Product>>
): Container | undefined => {
  const orderProducts = Object.keys(order).map(
    (productId) => products[productId]
  );
  const productTypeCounts = orderProducts.reduce<Record<string, number>>(
    (prev, product) => {
      if (prev[product.type.id]) {
        prev[product.type.id] += order[product.id];
      } else {
        prev[product.type.id] = order[product.id];
      }
      return prev;
    },
    {}
  );
  const productTypeIds = Object.keys(productTypeCounts);
  const candidates = [...containers].filter((container) =>
    productTypeIds.every((productTypeId) =>
      fits(
        container.maxCountForProductType[productTypeId],
        productTypeCounts[productTypeId]
      )
    )
  );
  return candidates.sort(compareContainersByVolume)[0];
};
export default selectContainer;
