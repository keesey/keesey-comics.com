/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import useTheme from "~/themes/useTheme"
import styles from "./Header.module.scss"
import useLogoColor from "./useLogoColor"
const Header: VFC = () => {
    const theme = useTheme()
    const logoColor = useLogoColor()
    return (
        <header className={`${styles.header} ${styles[`theme-${theme}`]}`}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.logo}>
                        <img
                            alt="Keesey Comics"
                            height={56}
                            src={`/logos/${logoColor}/keesey-comics.svg`}
                            width={93}
                        />
                    </a>
                </Link>
                <section className={styles.buttons}>
                    <Link href="/store">
                        <a>Store</a>
                    </Link>
                    <Link href="/mail">
                        <a>Mailing List</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </section>
                <section className={styles.social}>
                    <a href="//instagram.com/keesey.comics" role="button">
                        <img src={`/logos/${logoColor}/instagram.svg`} width={21} height={21} alt="Instagram" />
                    </a>
                    <a href="//twitter.com/paleocenecomic" role="button">
                        <img src={`/logos/${logoColor}/twitter.svg`} width={28} height={28} alt="Twitter" />
                    </a>
                    <a href="//facebook.com/paleocene" role="button">
                        <img src={`/logos/${logoColor}/facebook.svg`} width={21} height={21} alt="Facebook" />
                    </a>
                    <a href="//patreon.com/tmkeesey" role="button">
                        <img src={`/logos/${logoColor}/patreon.svg`} width={79} height={28} alt="Patreon" />
                    </a>
                </section>
            </nav>
        </header>
    )
}
export default Header
