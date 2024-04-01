import { ThemeColor } from "~/themes/ThemeColor"
import useBackgroundColor from "~/themes/useBackgroundColor"
import useTheme from "~/themes/useTheme"
const useLogoColor = (): ThemeColor => {
    const theme = useTheme()
    const bgColor = useBackgroundColor()
    switch (theme) {
        case "hell": {
            return "beige"
        }
        case "night": {
            return "cream"
        }
        default: {
            return bgColor
        }
    }
}
export default useLogoColor
