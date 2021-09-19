import { Theme } from "./Theme"
import { ThemeColor } from "./ThemeColor"
import useTheme from "./useTheme"
const COLORS: Readonly<Record<Theme, ThemeColor>> = {
    bw: "black",
    day: "black",
    kc: "brown",
    night: "white",
}
const useForegroundColor = () => COLORS[useTheme()]
export default useForegroundColor
