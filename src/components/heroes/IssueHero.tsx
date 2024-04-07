import Image from "next/image"
import { FC, PropsWithChildren } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import AgeRecommendation, { Props as AgeRecommendationProps } from "./AgeRecommendation"
import ExternalStores, { Props as ExternalStoresProps } from "./ExternalStores"
import styles from "./IssueHero.module.scss"
import ComicText from "../ComicText"
export interface Props extends PropsWithChildren {
    ageRecommendation: AgeRecommendationProps["ageRecommendation"]
    author: string
    id: "paleocene" | "pleistocene" | "the-flesh"
    number: number
    seriesTitle: string
    storeLinks?: ExternalStoresProps["links"]
}
const IssueHero: FC<Props> = ({ ageRecommendation, author, children, id, number, seriesTitle, storeLinks }) => {
    const className = useThemedClassName(styles, "hero")
    const paddedNumber = number < 10 ? `0${number}` : String(number)
    return (
        <header className={className}>
            <Image
                alt={`${seriesTitle} #${number}`}
                height={640}
                priority
                src={`/images/issues/${id}/${paddedNumber}/front_cover.png`}
                width={416}
            />
            <div className={styles.info}>
                <div className={styles.byline}>
                    <ComicText>{`by ${author}`}</ComicText>
                </div>
                {children}
                <ExternalStores links={storeLinks} />
                <AgeRecommendation ageRecommendation={ageRecommendation} />
            </div>
        </header>
    )
}
export default IssueHero
