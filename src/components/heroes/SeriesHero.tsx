/* eslint-disable @next/next/no-img-element */
import { Fragment, VFC } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import useThemedClassName from "~/themes/useThemedClassName"
import ComicText from "../ComicText"
import CTA from "../CTA"
import Logo from "../Logo"
import styles from "./SeriesHero.module.scss"
export type ExternalStoreLink = Readonly<{
    type: "comixology" | "gumroad"
    url: string
}>
export interface Props {
    ageRecommendation: "9+" | "17+"
    id: "paleocene" | "pleistocene";
    storeLinks: readonly ExternalStoreLink[];
    title: string;
}
const AGE_RECOMMENDATION_TEXT: Readonly<Record<Props["ageRecommendation"], string>> = {
    "17+": "seventeen and up",
    "9+": "nine and up",
}
const EXTERNAL_STORE_LOGO_HEIGHT: Readonly<Record<ExternalStoreLink["type"], number>> = {
    gumroad: 48,
    comixology: 20
}
const SeriesHero: VFC<Props> = ({ ageRecommendation, id, storeLinks, title }) => {
    const className = useThemedClassName(styles, "hero");
    const logoColor = useForegroundColor()
    return (
        <section className={className}>
            <Logo key="logo" color={logoColor} type={id} className={styles.logo} />
            <div className={styles.store} key="store">
                <CTA href="https://gumroad.com/keesey">
                    Buy print issues
                </CTA>
            </div>
            {storeLinks?.length > 0 && (
                <div className={styles.externalStores} key="external-stores">
                    <ComicText>Also available digitally on:</ComicText>
                    {storeLinks.map(({ type, url }) => (
                        <Fragment key={type}>
                            {" "}
                            <a href={url}>
                                <Logo color={logoColor} type={type} width="auto" height={EXTERNAL_STORE_LOGO_HEIGHT[type]} />
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
