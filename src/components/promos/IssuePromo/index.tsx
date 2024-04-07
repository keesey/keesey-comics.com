/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type FC } from "react"
import styles from "./index.module.scss"
export interface Props {
    id: "paleocene" | "pleistocene" | "the-flesh"
    number: number
}
const TITLES: Readonly<Record<Props["id"], string>> = {
    paleocene: "Paleocene",
    pleistocene: "Pleistocene",
    "the-flesh": "The Flesh",
}
const padNumber = (n: number) => (n < 10 ? `0${n}` : String(n))
const IssueImage: FC<Props> = ({ id, number }) => {
    return (
        <Image
            alt={`${TITLES[id]} #${number}`}
            height={320}
            src={`/images/issues/${id}/${padNumber(number)}/front_cover.png`}
            width={208}
        />
    )
}
const IssuePromo: FC<Props> = ({ id, number }) => {
    const pathname = usePathname()
    const href = `/${id}/issues/${padNumber(number)}`
    if (pathname === href) {
        return (
            <div className={styles.promo}>
                <IssueImage id={id} number={number} />
            </div>
        )
    }
    return (
        <Link href={href} className={styles.promo}>
            <IssueImage id={id} number={number} />
        </Link>
    )
}
export default IssuePromo
