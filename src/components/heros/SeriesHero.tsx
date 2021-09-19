/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Fragment, VFC } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import ComicText from "../ComicText"
import styles from "./SeriesHero.module.scss"
export type ExternalStoreLink = Readonly<{
    type: "comiXology" | "Gumroad"
    url: string
}>
export interface Props {
    ageRecommendation: "9+" | "17+"
    id: "paleocene" | "pleistocene";
    storeLinks: readonly ExternalStoreLink[];
    title: string;
}
const LOGO_FORMATS: Readonly<Record<Props["id"], "png" | "svg">> = {
    paleocene: "svg",
    pleistocene: "png",
}
const AGE_RECOMMENDATION_TEXT: Readonly<Record<Props["ageRecommendation"], string>> = {
    "17+": "seventeen and up",
    "9+": "nine and up",
}
const EXTERNAL_STORE_LOGO_HEIGHT: Readonly<Record<ExternalStoreLink["type"], number>> = {
    Gumroad: 48,
    comiXology: 20
}
const SeriesHero: VFC<Props> = ({ ageRecommendation, id, storeLinks, title }) => {
    const logoColor = useForegroundColor()
    return (
        <section className={styles.hero}>
            <img
                alt={title}
                className={styles.logo}
                key="logo"
                src={`/logos/${logoColor}/${id}.${LOGO_FORMATS[id]}`}
            />
            <div className={styles.store} key="store">
                <Link href="/store">
                    <a className={styles.cta} role="button">
                        <ComicText>Buy Issues</ComicText>
                    </a>
                </Link>
            </div>
            {storeLinks?.length > 0 && (
                <div className={styles.externalStores} key="external-stores">
                    <ComicText>Also available digitally on:</ComicText>
                    {storeLinks.map(({ type, url }) => (
                        <Fragment key={type}>
                            {" "}
                            <a href={url}>
                                <img alt={type} src={`/logos/${logoColor}/${type.toLowerCase()}.svg`} width="auto" height={EXTERNAL_STORE_LOGO_HEIGHT[type]} />
                            </a>
                        </Fragment>
                    ))}
                </div>
            )}
            <div key="age-recommendation" className={styles.ageRecommendation}>
                <ComicText>{`Age Recommendation: ${AGE_RECOMMENDATION_TEXT[ageRecommendation]}.`}</ComicText>
            </div>
        </section>
    )
}
export default SeriesHero
