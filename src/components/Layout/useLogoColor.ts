import { ThemeColor } from "~/themes/ThemeColor"
import useBackgroundColor from "~/themes/useBackgroundColor"
import useTheme from "~/themes/useTheme"
const useLogoColor = (): ThemeColor => {
    const theme = useTheme()
    const bgColor = useBackgroundColor()
    return theme === "night" ? "cream" : bgColor;
}
export default useLogoColor
