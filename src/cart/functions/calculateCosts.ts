import { PRODUCTS_MAP } from "../constants/PRODUCTS";
import { SHIPPING_OPTIONS_MAP } from "../constants/SHIPPING_OPTIONS";
import { Address } from "../models/Address";
import { Costs } from "../models/Costs";
import { Order } from "../models/Order";
import { Package } from "../models/Package";
import calculateShipping from "./calculateShipping";
import selectContainer from "./selectContainer";
const PAYPAL_TRANSACTION_RATE = 0.0289;
const PAYPAL_TRANSACTION_FEE = 0.49;
const calculateCosts = async (
  order: Order,
  address: Address
): Promise<Costs> => {
  const container = selectContainer(order);
  if (!container) {
    throw new Error("Order is too large for this form.");
  }
  const [ounces, handling, products, shippingAdditional] = order.reduce<
    [number, number, number, number]
  >(
    (
      [prevOunces, prevHandling, prevProducts, prevShippingAdditional],
      { productId, quantity, shippingOptionId }
    ) => {
      const product = PRODUCTS_MAP[productId];
      const shippingOption = shippingOptionId
        ? SHIPPING_OPTIONS_MAP[shippingOptionId]
        : undefined;
      return [
        prevOunces +
          product.type.ounces +
          (shippingOption ? quantity * shippingOption.ounces : 0),
        prevHandling + quantity * Number(process.env.HANDLING_RATE),
        prevProducts + quantity * product.type.value,
        prevShippingAdditional +
          (shippingOption ? quantity * shippingOption.value : 0),
      ];
    },
    [container.ounces, 0, 0, 0]
  );
  const pkg: Package = {
    dimensions: container.dimensions,
    ounces,
    value: container.value + products,
  };
  const shipping = await calculateShipping({ address, package: pkg });
  const processingSubtotal =
    pkg.value + shipping.rate + shippingAdditional + handling;
  const processing = Number(
    (
      PAYPAL_TRANSACTION_FEE +
      processingSubtotal * PAYPAL_TRANSACTION_RATE
    ).toFixed(2)
  );
  return {
    containers: container.value,
    shipping: shipping.rate,
    shippingAdditional,
    handling,
    products,
    processing,
  };
};
export default calculateCosts;
