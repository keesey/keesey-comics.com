import { FC } from "react"
import ComicText from "../ComicText"
import styles from "./AgeRecommendation.module.scss"
export interface Props {
    ageRecommendation: "9+" | "17+"
}
const AGE_RECOMMENDATION_TEXT: Readonly<Record<Props["ageRecommendation"], string>> = {
    "17+": "seventeen and up",
    "9+": "nine and up",
}
const AgeRecommendation: FC<Props> = ({ ageRecommendation }) => {
    return (
        <div className={styles.ageRecommendation}>
            <ComicText>{`Age Recommendation: ${AGE_RECOMMENDATION_TEXT[ageRecommendation]}.`}</ComicText>
        </div>
    )
}
export default AgeRecommendation
