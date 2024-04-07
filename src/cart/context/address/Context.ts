import { createContext, Dispatch } from "react"
import { Action } from "./Action"
import { State } from "./State"
const Context = createContext<[State | undefined, Dispatch<Action>] | undefined>(undefined)
export default Context
