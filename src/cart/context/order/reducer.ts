import { Reducer } from "react";
import PRODUCTS, { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { OrderItem } from "~/cart/models/OrderItem";
import { Action } from "./Action";
import { State } from "./State";
const compareItems = (a: OrderItem, b: OrderItem) => {
  if (a === b) {
    return 0
  }
  const aIndex = PRODUCTS.findIndex(item => item.id === a.productId)
  const bIndex = PRODUCTS.findIndex(item => item.id === b.productId)
  if (!(aIndex >= 0)) {
    if (!(bIndex >= 0)) {
      return 0
    }
    return 1
  }
  if (!(bIndex >= 0)) {
    return 1
  }
  return aIndex - bIndex
};
const setQuantity = (
  prevState: State,
  productId: string,
  quantity: number
): State => {
  const item = prevState.find((item) => item.productId === productId);
  if (!item) {
    return [
      ...prevState,
      {
        productId,
        quantity,
        ...getShippingOptionId(productId),
      },
    ].sort(compareItems);
  }
  return [
    ...prevState.filter((item) => item.productId !== productId),
    { ...item, productId, quantity },
  ].sort(compareItems);
};
const getQuantity = (state: State, productId: string): number => {
  const item = state.find((item) => item.productId === productId);
  return item ? item.quantity : 0;
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
    case "INCREMENT_QUANTITY": {
      return setQuantity(
        prevState,
        action.payload.productId,
        getQuantity(prevState, action.payload.productId) + 1
      );
    }
    case "INITIALIZE": {
      return action.payload;
    }
    case "REMOVE_PRODUCT": {
      return prevState.filter(
        (item) => item.productId !== action.payload.productId
      );
    }
    case "SET_QUANTITY": {
      return setQuantity(
        prevState,
        action.payload.productId,
        action.payload.quantity
      );
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
