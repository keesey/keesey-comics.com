import { FC, PropsWithChildren } from "react"
import styles from "./index.module.scss"
export type Props = PropsWithChildren<{}>
const CTANav: FC<Props> = ({ children }) => {
    return <nav className={styles.main}>{children}</nav>
}
export default CTANav
