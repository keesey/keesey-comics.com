import { createContext } from "react"
import { Theme } from "./Theme"
const ThemeContext = createContext<Theme | undefined>(undefined)
export default ThemeContext
