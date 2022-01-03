import { Reducer } from "react";
import { Action } from "./Action";
import { State } from "./State";
const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return action.payload;
    }
    case "SET_VALUE": {
      return {
        ...prevState,
        [action.payload.field]: action.payload.value
          ? action.payload.value.trim().replaceAll(/\s+/g, " ")
          : undefined,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default reducer;
