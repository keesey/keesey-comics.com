import { FC } from "react";
import styles from "./index.module.scss";
const Section: FC = ({ children }) => {
    return (
        <section className={styles.main}>
            {children}
        </section>
    );
};
export default Section;
