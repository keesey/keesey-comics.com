/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./Header.module.scss"
import useTheme from "~/themes/useTheme"
import { Theme } from "~/themes/Theme"
const LOGO_COLORS: Readonly<Record<Theme, "black" | "brown" | "cream" | "white">> = {
    bw: "white",
    day: "white",
    kc: "cream",
    night: "black",
}
const Header: VFC = () => {
    const theme = useTheme()
    const logoColor = LOGO_COLORS[theme];
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
                        <Image src={`/logos/${logoColor}/twitter.svg`} width={28} height={28} alt="Twitter" />
                    </a>
                    <a href="//facebook.com/paleocene" role="button">
                        <Image src={`/logos/${logoColor}/facebook.svg`} width={21} height={21} alt="Facebook" />
                    </a>
                    <a href="//patreon.com/tmkeesey" role="button">
                        <Image src={`/logos/${logoColor}/patreon.svg`} width={59} height={21} alt="Patreon" />
                    </a>
                </section>
            </nav>
        </header>
    )
}
export default Header
