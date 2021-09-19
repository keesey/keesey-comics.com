import { FC } from "react"
import ThemeContext from "~/themes/ThemeContext";
import CurrentBanner from "../banners/CurrentBanner";
import Footer, { Props as FooterProps } from "./Footer"
import Header from "./Header"
import styles from "./index.module.scss"
export interface Props {
    theme: "bw" | "day" | "kc" | "night"
    footerPromos?: FooterProps["promos"]
}
const Layout: FC<Props> = ({ children, footerPromos, theme }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <div className={styles.layout}>
                <Header />
                <main className={`${styles.main} ${styles[`theme-${theme}`]}`}>
                    <CurrentBanner />
                    {children}
                </main>
                <Footer promos={footerPromos} />
            </div>
        </ThemeContext.Provider>
    )
};
export default Layout;
