import { FC } from "react";
import getThemedClassName from "~/themes/getThemedClassName";
import ThemeContext from "~/themes/ThemeContext";
import CurrentBanner from "../banners/CurrentBanner";
import Footer, { Props as FooterProps } from "./Footer";
import Header from "./Header";
import styles from "./index.module.scss";
export interface Props {
    theme: "bw" | "day" | "kc" | "night"
    footerPromos?: FooterProps["promos"]
}
const Layout: FC<Props> = ({ children, footerPromos, theme }) => {
    const className = getThemedClassName(theme, styles, "layout");
    return (
        <ThemeContext.Provider value={theme}>
            <div className={className}>
                <Header />
                <main className={styles.main}>
                    <CurrentBanner />
                    {children}
                </main>
                <Footer promos={footerPromos} />
            </div>
        </ThemeContext.Provider>
    )
};
export default Layout;
