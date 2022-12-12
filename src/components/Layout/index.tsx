import { FC, PropsWithChildren } from "react"
import getThemedClassName from "~/themes/getThemedClassName"
import ThemeContext from "~/themes/ThemeContext"
import CurrentBanner from "../banners/CurrentBanner"
import Footer, { Props as FooterProps } from "./Footer"
import Header, { Props as HeaderProps } from "./Header"
import styles from "./index.module.scss"
export interface Props extends PropsWithChildren {
    footerPromos?: FooterProps["promos"]
    headerPromos?: HeaderProps["promos"]
    theme: "bw" | "day" | "kc" | "night"
}
const Layout: FC<Props> = ({ children, headerPromos, footerPromos, theme }) => {
    const className = getThemedClassName(theme, styles, "layout")
    return (
        <ThemeContext.Provider value={theme}>
            <div className={className}>
                <Header promos={headerPromos} />
                <main className={styles.main}>
                    <CurrentBanner />
                    {children}
                </main>
                <Footer promos={footerPromos} />
            </div>
        </ThemeContext.Provider>
    )
}
export default Layout
