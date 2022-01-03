import { Reducer } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { OrderItem } from "~/cart/models/OrderItem";
import { Action } from "./Action";
import { State } from "./State";
const compareItems = (a: OrderItem, b: OrderItem) => {
  if (a === b) {
    return 0;
  }
  const aProduct = PRODUCTS_MAP[a.productId];
  const bProduct = PRODUCTS_MAP[b.productId];
  if (aProduct.id < bProduct.id) {
    return -1;
  }
  if (aProduct.id > bProduct.id) {
    return 1;
  }
  return 0;
};
const getShippingOptionId = (
  productId: string,
  shippingOptionId?: string
): Pick<OrderItem, "shippingOptionId"> | undefined => {
  const id =
    shippingOptionId ?? PRODUCTS_MAP[productId].type.shippingOptions?.[0].id;
  return id ? { shippingOptionId: id } : undefined;
};
const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return action.payload;
    }
    case "REMOVE_PRODUCT": {
      return prevState.filter(
        (item) => item.productId !== action.payload.productId
      );
    }
    case "SET_QUANTITY": {
      const item = prevState.find(
        (item) => item.productId === action.payload.productId
      );
      if (!item) {
        return [
          ...prevState,
          {
            ...action.payload,
            ...getShippingOptionId(action.payload.productId),
          },
        ].sort(compareItems);
      }
      return [
        ...prevState.filter(
          (item) => item.productId !== action.payload.productId
        ),
        { ...item, ...action.payload },
      ].sort(compareItems);
    }
    case "SET_SHIPPING_OPTION": {
      const item = prevState.find(
        (item) => item.productId === action.payload.productId
      );
      if (!item) {
        return prevState;
      }
      return [
        ...prevState.filter(
          (item) => item.productId !== action.payload.productId
        ),
        {
          productId: item.productId,
          quantity: item.quantity,
          ...getShippingOptionId(
            action.payload.productId,
            action.payload.shippingOptionId
          ),
        },
      ].sort(compareItems);
    }
    default: {
      return prevState;
    }
  }
};
export default reducer;
