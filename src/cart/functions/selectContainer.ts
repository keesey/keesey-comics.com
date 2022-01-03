import CONTAINERS from "../constants/CONTAINERS";
import { PRODUCTS_MAP } from "../constants/PRODUCTS";
import { Container } from "../models/Container";
import { Order } from "../models/Order";
const getVolume = (c: Container) =>
  c.dimensions.reduce<number>((prev, measurement) => prev * measurement, 1);
const compareContainersByVolume = (a: Container, b: Container) => {
  if (a === b) {
    return 0;
  }
  return getVolume(a) - getVolume(b);
};
const selectContainer = (order: Order): Container | undefined => {
  return CONTAINERS.filter((container) =>
    order.every(({ productId, shippingOptionId, quantity }) =>
      container.quantities.some(
        ({ maximum, productType, shippingOption }) =>
          PRODUCTS_MAP[productId].type.id === productType.id && // Accommodates the product type
          shippingOptionId === shippingOption?.id && // Includes the shipping option (if any)
          quantity <= maximum // Quantity does not exceed maximum
      )
    )
  ).sort(compareContainersByVolume)[0];
};
export default selectContainer;
