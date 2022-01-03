import { createContext } from "react";
import { State } from "./State";
const Context = createContext<State | undefined>(undefined);
export default Context;