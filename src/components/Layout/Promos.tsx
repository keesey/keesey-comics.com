/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FC } from "react"
import { ThemeColor } from "~/themes/ThemeColor"
import Logo from "../Logo"
import styles from "./Promos.module.scss"
import useLogoColor from "./useLogoColor"
export type PromoType = "paleocene" | "parry-and-carney" | "phylopic" | "pleistocene"
export interface Props {
    promos?: readonly PromoType[]
}
const Promo: FC<{ color: ThemeColor; type: PromoType }> = ({ color, type }) => {
    switch (type) {
        case "paleocene": {
            return (
                <Link href="/paleocene" legacyBehavior>
                    <a>
                        <Logo color={color} type="paleocene" height={32} width={88} />
                    </a>
                </Link>
            )
        }
        case "parry-and-carney": {
            return (
                <Link href="/parry-and-carney" legacyBehavior>
                    <a>
                        <Logo color={color} type="parry-and-carney" height={32} width={165.5} />
                    </a>
                </Link>
            )
        }
        case "pleistocene": {
            return (
                <Link href="/pleistocene" legacyBehavior>
                    <a>
                        <Logo color={color} type="pleistocene" height={32} width={101} />
                    </a>
                </Link>
            )
        }
        case "phylopic":
            return (
                <a href="//www.phylopic.org" target="_blank" rel="noreferrer">
                    <Logo color={color} type="phylopic" height={21} width={129} />
                </a>
            )
        default: {
            return null
        }
    }
}
const Promos: FC<Props> = ({ promos }) => {
    const logoColor = useLogoColor()
    if (!promos?.length) {
        return null
    }
    return (
        <section className={styles.promos} key="promos">
            {promos.map(promo => (
                <div key={promo}>
                    <Promo color={logoColor} type={promo} />
                </div>
            ))}
        </section>
    )
}
export default Promos
