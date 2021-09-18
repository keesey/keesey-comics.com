import Link from "next/link"
import { VFC } from "react"
import useTheme from "~/themes/useTheme"
import styles from "./Footer.module.scss"
const Footer: VFC = () => {
    const theme = useTheme()
    return (
        <footer className={`${styles.footer} ${styles[`theme-${theme}`]}`}>
            <nav>
                <span><abbr title="Copyright">©</abbr> 2021 <Link href="/contact"><a title="Contact the Creator">T. Michael Keesey</a></Link> • All Rights Reserved</span>
            </nav>
        </footer>
    )
}
export default Footer
