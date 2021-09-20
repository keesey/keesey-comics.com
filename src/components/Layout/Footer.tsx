/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import { ThemeColor } from "~/themes/ThemeColor"
import useThemedClassName from "~/themes/useThemedClassName"
import Logo from "../Logo"
import styles from "./Footer.module.scss"
import useLogoColor from "./useLogoColor"
type PromoType = "paleocene" | "phylopic" | "pleistocene";
export interface Props {
    promos?: readonly PromoType[];
}
const Promo: VFC<{ color: ThemeColor, type: PromoType }> = ({ color, type }) => {
    switch (type) {
        case "paleocene": {
            return (
                <Link href="/paleocene">
                    <a>
                        <Logo color={color} type="paleocene" height={28} width={77} />
                    </a>
                </Link>
            )
        }
        case "pleistocene": {
            return (
                <Link href="/pleistocene">
                    <a>
                        <Logo color={color} type="pleistocene" height={28} width={88} />
                    </a>
                </Link>
            )
        }
        case "phylopic":
        default: {
            return (
                <a href="//phylopic.org" target="_blank" rel="noreferrer">
                    <Logo color={color} type="phylopic" height={21} width={129} />
                </a>
            )
        }
    }
}
const Footer: VFC<Props> = ({ promos }) => {
    const className = useThemedClassName(styles, "footer");
    const logoColor = useLogoColor()
    return (
        <footer className={className}>
            <nav className={styles.nav}>
                <div key="copyright">
                    <abbr title="Copyright">©</abbr> 2021 <Link href="/contact"><a title="Contact the Creator">T. Michael Keesey</a></Link> • All Rights Reserved
                </div>
                {promos && (
                    <section className={styles.promos} key="promos">
                        {
                            promos.map((promo) => (
                                <div key={promo}>
                                    <Promo color={logoColor} type={promo} />
                                </div>
                            ))
                        }
                    </section>
                )}
            </nav>
        </footer>
    )
}
Footer.defaultProps = {
    promos: ["phylopic"],
}
export default Footer
