import { Theme } from "./Theme"
import { ThemeColor } from "./ThemeColor"
import useTheme from "./useTheme"
const COLORS: Readonly<Record<Theme, ThemeColor>> = {
    bw: "black",
    day: "original",
    kc: "brown",
    night: "white",
    webcomic: "original",
}
const useForegroundColor = () => COLORS[useTheme()]
export default useForegroundColor
