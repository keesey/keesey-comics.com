/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import Logo from "../Logo"
import styles from "./Header.module.scss"
import useLogoColor from "./useLogoColor"
import Promos, { Props as PromosProps } from "./Promos"
export type Props = PromosProps
const Header: VFC<PromosProps> = ({ promos }) => {
    const className = useThemedClassName(styles, "header");
    const logoColor = useLogoColor()
    return (
        <header className={className}>
            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.logo}>
                        <Logo color={logoColor} type="keesey-comics" width={93} height={56} />
                    </a>
                </Link>
                <Promos promos={promos} />
                <section className={styles.buttons}>
                    <a href="https://gumroad.com/keesey">Store</a>
                    <Link href="/mail">
                        <a>Mailing List</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </section>
                <section className={styles.social}>
                    <a href="//instagram.com/keesey.comics" role="button">
                        <Logo color={logoColor} type="instagram" width={21} height={21} />
                    </a>
                    <a href="//twitter.com/paleocenecomic" role="button">
                        <Logo color={logoColor} type="twitter" width={28} height={28} />
                    </a>
                    <a href="//facebook.com/paleocene" role="button">
                        <Logo color={logoColor} type="facebook" width={21} height={21} />
                    </a>
                    <a href="//patreon.com/tmkeesey" role="button">
                        <Logo color={logoColor} type="patreon" width={79} height={28} />
                    </a>
                </section>
            </nav>
        </header>
    )
}
export default Header
