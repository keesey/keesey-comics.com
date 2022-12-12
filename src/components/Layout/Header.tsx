/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import Logo from "../Logo"
import CartButton from "./CartButton"
import styles from "./Header.module.scss"
import Promos, { Props as PromosProps } from "./Promos"
import useLogoColor from "./useLogoColor"
export type Props = PromosProps
const Header: FC<PromosProps> = ({ promos }) => {
    const className = useThemedClassName(styles, "header")
    const logoColor = useLogoColor()
    return (
        <header className={className}>
            <nav className={styles.nav}>
                <Link href="/" legacyBehavior>
                    <a className={styles.logo}>
                        <Logo color={logoColor} type="keesey-comics" width={93} height={56} />
                    </a>
                </Link>
                <Promos promos={promos} />
                <section className={styles.buttons}>
                    <Link href="/store" legacyBehavior passHref >
                        <a>Store</a>
                    </Link>
                    <Link href="/mailinglist" legacyBehavior passHref>
                        <a>Mailing List</a>
                    </Link>
                    <Link href="/contact" legacyBehavior passHref>
                        <a>Contact</a>
                    </Link>
                </section>
                <section className={styles.social}>
                    <CartButton />
                    <a href="//sauropods.win/@keeseycomics" rel="me" role="button">
                        <Logo color={logoColor} type="mastodon" width={25} height={25} />
                    </a>
                    <a href="//instagram.com/keesey.comics" rel="me" role="button">
                        <Logo color={logoColor} type="instagram" width={21} height={21} />
                    </a>
                    <a href="//facebook.com/paleocene" rel="me" role="button">
                        <Logo color={logoColor} type="facebook" width={21} height={21} />
                    </a>
                    <Link href="/kickstarter" legacyBehavior passHref>
                        <a role="button">
                            <Logo color={logoColor} type="kickstarter-k" width={19} height={21} />
                        </a>
                    </Link>
                    <a href="//patreon.com/tmkeesey" rel="author" role="button">
                        <Logo color={logoColor} type="patreon" width={79} height={21} />
                    </a>
                </section>
            </nav>
        </header>
    )
}
export default Header
