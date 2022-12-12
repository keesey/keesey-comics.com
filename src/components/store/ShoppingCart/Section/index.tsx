import { FC, PropsWithChildren } from "react"
import styles from "./index.module.scss"
const Section: FC<PropsWithChildren> = ({ children }) => {
    return <section className={styles.main}>{children}</section>
}
export default Section
