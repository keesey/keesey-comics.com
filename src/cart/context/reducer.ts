import { Reducer } from "react";
import { Order } from "../models/Order";
import { Action } from "./Action";
import { State } from "./State";
const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case "SET_ORDER": {
        return {
            ...prevState,
            order: action.payload,
        };
    }
    case "SET_PRODUCT_COUNT": {
      const count = Math.floor(action.payload.count);
      if (!isFinite(count) || !(count > 0)) {
        const order = Object.keys(prevState)
          .filter((key) => key !== action.payload.productId)
          .reduce<Order>((prev, key) => ({ ...prev, key: prevState.order[key] }), {});
        return {
            ...prevState,
            order,
        };
      }
      return {
        ...prevState,
        order: {
            ...prevState.order,
            [action.payload.productId]: action.payload.count,
        },
      };
    }
    default: {
      return prevState;
    }
  }
};
export default reducer;
