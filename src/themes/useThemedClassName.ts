import getThemedClassName from "./getThemedClassName"
import useTheme from "./useTheme"
const useThemedClassName = (styles: Readonly<Record<string, string>>, ...classNames: readonly string[]) => {
    const theme = useTheme()
    return getThemedClassName(theme, styles, ...classNames)
}
export default useThemedClassName
