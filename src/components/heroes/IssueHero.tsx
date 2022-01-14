import Image from "next/image"
import { FC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import AgeRecommendation, { Props as AgeRecommendationProps } from "./AgeRecommendation"
import ExternalStores, { Props as ExternalStoresProps } from "./ExternalStores"
import styles from "./IssueHero.module.scss"
export interface Props {
    ageRecommendation: AgeRecommendationProps["ageRecommendation"]
    id: "paleocene" | "pleistocene"
    number: number
    seriesTitle: string
    storeLinks?: ExternalStoresProps["links"]
}
const IssueHero: FC<Props> = ({ ageRecommendation, children, id, number, seriesTitle, storeLinks }) => {
    const className = useThemedClassName(styles, "hero")
    const paddedNumber = number < 10 ? `0${number}` : String(number)
    return (
        <header className={className}>
            <Image
                alt={`${seriesTitle} #${number}`}
                height={640}
                layout="fixed"
                src={`/images/issues/${id}/${paddedNumber}/front_cover.png`}
                width={416}
            />
            <div className={styles.info}>
                {children}
                <ExternalStores links={storeLinks} />
                <AgeRecommendation ageRecommendation={ageRecommendation} />
            </div>
        </header>
    )
}
export default IssueHero
