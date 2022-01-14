import { FC } from "react"
import styles from "./Nav.module.scss"
const Nav: FC = ({ children }) => <nav className={styles.nav}>{children}</nav>
export default Nav
