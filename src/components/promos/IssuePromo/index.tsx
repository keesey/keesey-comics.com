/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import styles from "./index.module.scss"
export interface Props {
    id: "paleocene" | "pleistocene"
    number: number
}
const TITLES: Readonly<Record<Props["id"], string>> = {
    paleocene: "Paleocene",
    pleistocene: "Pleistocene",
}
const IssuePromo: VFC<Props> = ({ id, number }) => {
    const paddedNumber = number < 10 ? `0${number}` : String(number);
    return (
        <Link href={`/${id}/issues/${paddedNumber}`}>
            <a className={styles.promo}>
                <img
                    alt={`${TITLES[id]} #${number}`}
                    height={320}
                    src={`/images/issues/${id}/${paddedNumber}/front_cover.png`}
                    width={208}
                />
            </a>
        </Link>
    )
}
export default IssuePromo;
