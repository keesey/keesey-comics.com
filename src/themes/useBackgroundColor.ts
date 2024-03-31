import { Theme } from "./Theme"
import { ThemeColor } from "./ThemeColor"
import useTheme from "./useTheme"
const COLORS: Readonly<Record<Theme, ThemeColor>> = {
    bw: "white",
    day: "white",
    hell: "black",
    kc: "cream",
    night: "black",
    webcomic: "white",
}
const useBackgroundColor = () => COLORS[useTheme()]
export default useBackgroundColor
