import { Theme } from "./Theme"
import { ThemeColor } from "./ThemeColor"
import useTheme from "./useTheme"
const COLORS: Readonly<Record<Theme, ThemeColor>> = {
    bw: "black",
    day: "original",
    hell: "cream",
    kc: "brown",
    night: "white",
    webcomic: "original",
}
const useForegroundColor = () => COLORS[useTheme()]
export default useForegroundColor
