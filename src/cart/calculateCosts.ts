import { Order } from "./Order";
import { Address } from "./Address";
import { Container } from "./Container";
import { Costs } from "./Costs";
import selectContainer from "./selectContainer";
import calculateShipping from "./calculateShipping";
import { Package } from "./Package";
import { Product } from "./Product";
const calculateCosts = async (
  order: Order,
  address: Address,
  containers: Iterable<Container>,
  products: Readonly<Record<string, Product>>
): Promise<Costs> => {
  const container = selectContainer(order, containers, products);
  if (!container) {
    throw new Error("Order is too large for this form.");
  }
  const orderProducts = Object.keys(order).map(
    (productId) => products[productId]
  );
  const productValue = orderProducts.reduce<number>(
    (prev, product) => prev + product.type.value,
    0
  );
  const pkg: Package = {
    dimensions: container.dimensions,
    ounces:
      container.ounces +
      orderProducts.reduce<number>(
        (prev, product) => prev + product.type.ounces,
        0
      ),
    value: container.value + productValue,
  };
  const shipping = await calculateShipping({ address, package: pkg });
  return {
    containers: container.value,
    shipping: shipping.postage,
    handling: orderProducts.length * Number(process.env.HANDLING_RATE),
    products: productValue,
  };
};
export default calculateCosts;
