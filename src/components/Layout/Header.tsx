/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import Logo from "../Logo"
import CartButton from "./CartButton"
import styles from "./Header.module.scss"
import Promos, { Props as PromosProps } from "./Promos"
import useLogoColor from "./useLogoColor"
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
                    <Link href="/store" passHref>
                        <a>Store</a>
                    </Link>
                    <Link href="/mailinglist" passHref>
                        <a>Mailing List</a>
                    </Link>
                    <Link href="/contact" passHref>
                        <a>Contact</a>
                    </Link>
                </section>
                <section className={styles.social}>
                    <CartButton />
                    <a href="//twitter.com/paleocenecomic" role="button">
                        <Logo color={logoColor} type="twitter" width={28} height={28} />
                    </a>
                    <a href="//facebook.com/paleocene" role="button">
                        <Logo color={logoColor} type="facebook" width={21} height={21} />
                    </a>
                    <Link href="/kickstarter" passHref>
                        <a role="button">
                            <Logo color={logoColor} type="kickstarter-k" width={19} height={21} />
                        </a>
                    </Link>
                    <a href="//patreon.com/tmkeesey" role="button">
                        <Logo color={logoColor} type="patreon" width={79} height={21} />
                    </a>
                </section>
            </nav>
        </header>
    )
}
export default Header
