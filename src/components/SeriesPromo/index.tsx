/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import ComicText from "../ComicText"
import styles from "./index.module.scss"
export interface Props {
    children: string;
    id: "paleocene" | "pleistocene"
}
const LOGO_FORMATS: Readonly<Record<Props["id"], "png" | "svg">> = {
    paleocene: "svg",
    pleistocene: "png",
}
const SeriesPromo: FC<Props> = ({ children, id }) => (
    <Link href={`/${id}`}>
        <a className={styles.promo}>
            <section id={id}>
                <div className={styles.desc}>
                    <ComicText>{children}</ComicText>
                </div>
                <div className={styles.image}>
                    <img
                        alt={id}
                        height="auto"
                        src={`/logos/brown/${id}.${LOGO_FORMATS[id]}`}
                        width="100%"
                    />
                </div>
                <div className={styles.image}>
                    <Image
                        alt=""
                        height={180}
                        layout="responsive"
                        src={`/promos/${id}.png`}
                        width={600}
                    />
                </div>
            </section>
        </a>
    </Link>
)
export default SeriesPromo;
