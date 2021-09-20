/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import CTA from "../CTA"
import AgeRecommendation, { Props as AgeRecommendationProps } from "./AgeRecommendation"
import ExternalStores, { Props as ExternalStoresProps } from "./ExternalStores"
import styles from "./IssueHero.module.scss"
export interface Props {
    ageRecommendation: AgeRecommendationProps["ageRecommendation"]
    id: "paleocene" | "pleistocene"
    number: number
    seriesTitle: string
    storeLinks: ExternalStoresProps["links"]
}
const IssueHero: VFC<Props> = ({ ageRecommendation, id, number, seriesTitle, storeLinks }) => {
    const className = useThemedClassName(styles, "hero");
    const paddedNumber = number < 10 ? `0${number}` : String(number);
    return (
        <section className={className}>
            <a className={styles.image} href="https://gumroad.com/keesey">
                <img
                    alt={`${seriesTitle} #${number}`}
                    height={640}
                    src={`/images/issues/${id}/${paddedNumber}/front_cover.png`}
                    width={416}
                />
            </a>
            <div className={styles.info}>
                <CTA href="https://gumroad.com/keesey">
                    Buy print issues
                </CTA>
                <ExternalStores links={storeLinks} />
                <AgeRecommendation ageRecommendation={ageRecommendation} />
            </div>
        </section>
    )
}
export default IssueHero
