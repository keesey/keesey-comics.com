import { FC, PropsWithChildren } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import useThemedClassName from "~/themes/useThemedClassName"
import ComicText from "../ComicText"
import Logo from "../Logo"
import IncrementQuantityCTA from "../store/IncrementQuantityCTA"
import AgeRecommendation, { Props as AgeRecommendationProps } from "./AgeRecommendation"
import ExternalStores, { Props as ExternalStoresProps } from "./ExternalStores"
import styles from "./SeriesHero.module.scss"
export type Props = PropsWithChildren<{
    ageRecommendation: AgeRecommendationProps["ageRecommendation"]
    author: string
    id: "paleocene" | "parry-and-carney" | "pleistocene" | "the-flesh"
    productIds?: readonly string[]
    storeLinks?: ExternalStoresProps["links"]
    title: string
}>
const SeriesHero: FC<Props> = ({ ageRecommendation, author, children, id, productIds, storeLinks, title }) => {
    const className = useThemedClassName(styles, "hero")
    const logoColor = useForegroundColor()
    return (
        <header className={className}>
            <Logo color={logoColor} type={id} className={styles.logo} alt={title} />
            <div className={styles.byline}>
                <ComicText>{`by ${author}`}</ComicText>
            </div>
            {children}
            {Boolean(productIds?.length) && (
                <div className={styles.store}>
                    <IncrementQuantityCTA href="/cart" productIds={productIds!} />
                </div>
            )}
            <ExternalStores links={storeLinks}>
                {Boolean(productIds?.length) ? (
                    <ComicText>Also available digitally on:</ComicText>
                ) : (
                    <ComicText>Available digitally on:</ComicText>
                )}
            </ExternalStores>
            <AgeRecommendation ageRecommendation={ageRecommendation} />
        </header>
    )
}
export default SeriesHero
