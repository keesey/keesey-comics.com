import { FC, PropsWithChildren } from "react"
import styles from "./Nav.module.scss"
const Nav: FC<PropsWithChildren> = ({ children }) => <nav className={styles.nav}>{children}</nav>
export default Nav
