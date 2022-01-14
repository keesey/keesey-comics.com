/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import ComicText from "~/components/ComicText"
import Logo from "~/components/Logo"
import styles from "./index.module.scss"
export interface Props {
    children: string
    id: "paleocene" | "pleistocene"
}
const SeriesPromo: FC<Props> = ({ children, id }) => (
    <Link href={`/${id}`}>
        <a className={styles.promo}>
            <section id={id}>
                <div className={styles.desc}>
                    <ComicText>{children}</ComicText>
                </div>
                <div className={styles.logo}>
                    <Logo color="brown" type={id} width="100%" height="auto" />
                </div>
                <div className={styles.image}>
                    <Image alt="" height={180} src={`/images/promos/${id}.png`} width={600} />
                </div>
            </section>
        </a>
    </Link>
)
export default SeriesPromo
