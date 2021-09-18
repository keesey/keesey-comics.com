import { FC } from "react"
import ThemeContext from "~/themes/ThemeContext";
import CurrentBanner from "../banners/CurrentBanner";
import Footer from "./Footer"
import Header from "./Header"
import styles from "./index.module.scss"
export interface Props {
    theme: "bw" | "day" | "kc" | "night"
}
const Layout: FC<Props> = ({ children, theme }) => {
    return (
        <ThemeContext.Provider value={theme}>
            <div className={styles.layout}>
                <Header />
                <main className={`${styles.main} ${styles[`theme-${theme}`]}`}>
                    <CurrentBanner />
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeContext.Provider>
    )
};
export default Layout;
