import { Reducer } from "react"
import { Action } from "./Action"
import { State } from "./State"
const reducer: Reducer<State, Action> = (prevState, action) => {
    switch (action.type) {
        case "INITIALIZE": {
            return action.payload
        }
        default: {
            return prevState
        }
    }
}
export default reducer
