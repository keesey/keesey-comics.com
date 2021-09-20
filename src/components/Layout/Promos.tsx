/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import { ThemeColor } from "~/themes/ThemeColor"
import Logo from "../Logo"
import styles from "./Promos.module.scss"
import useLogoColor from "./useLogoColor"
export type PromoType = "paleocene" | "phylopic" | "pleistocene";
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
const Promos: VFC<Props> = ({ promos }) => {
    const logoColor = useLogoColor()
    if (!promos?.length) {
        return null;
    }
    return (
        <section className={styles.promos} key="promos">
            {
                promos.map((promo) => (
                    <div key={promo}>
                        <Promo color={logoColor} type={promo} />
                    </div>
                ))
            }
        </section>
    )
}
export default Promos
