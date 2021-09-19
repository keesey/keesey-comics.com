import { FC } from "react";
import useTheme from "~/themes/useTheme";
import styles from "./index.module.scss";
const ComicStrip: FC = ({ children }) => {
    const theme = useTheme();
    return (
        <section className={`${styles.strip} ${styles[`theme-${theme}`]}`}>
            {children}
        </section>
    )
}
export default ComicStrip
