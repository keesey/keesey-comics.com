/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
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
const IssuePromo: FC<Props> = ({ id, number }) => {
    const paddedNumber = number < 10 ? `0${number}` : String(number)
    return (
        <Link href={`/${id}/issues/${paddedNumber}`} legacyBehavior>
            <a className={styles.promo}>
                <Image
                    alt={`${TITLES[id]} #${number}`}
                    height={320}
                    src={`/images/issues/${id}/${paddedNumber}/front_cover.png`}
                    width={208}
                />
            </a>
        </Link>
    )
}
export default IssuePromo
