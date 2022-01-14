import { Theme } from "./Theme"
const getThemedClassName = (theme: Theme, styles: Readonly<Record<string, string>>, ...classNames: readonly string[]) =>
    [styles[`theme-${theme}`], ...classNames.filter(Boolean).map(className => styles[className])]
        .filter(Boolean)
        .join(" ")
export default getThemedClassName
