import type { Reducer } from "react"
import type { Action } from "./Action"
import type { State } from "./State"
export const reducer: Reducer<State, Action> = (prevState, action) => {
  switch (action.type) {
    case "INITIALIZE": {
      return action.payload
    }
    default: {
      return prevState
    }
  }
}
