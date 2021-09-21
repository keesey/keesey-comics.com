import { VFC } from "react"
import useForegroundColor from "~/themes/useForegroundColor"
import useThemedClassName from "~/themes/useThemedClassName"
import Link from "next/link"
import CTA from "../CTA"
import Logo from "../Logo"
import AgeRecommendation, { Props as AgeRecommendationProps } from "./AgeRecommendation"
import ExternalStores, { Props as ExternalStoresProps } from "./ExternalStores"
import styles from "./SeriesHero.module.scss"
export interface Props {
    ageRecommendation: AgeRecommendationProps["ageRecommendation"]
    id: "paleocene" | "pleistocene"
    storeLinks: ExternalStoresProps["links"]
    title: string;
}
const SeriesHero: VFC<Props> = ({ ageRecommendation, id, storeLinks, title }) => {
    const className = useThemedClassName(styles, "hero");
    const logoColor = useForegroundColor()
    return (
        <header className={className}>
            <Logo color={logoColor} type={id} className={styles.logo} />
            <div className={styles.store}>
                <Link href="/store" passHref>
                    <CTA>Get it now!</CTA>
                </Link>
            </div>
            <ExternalStores links={storeLinks} />
            <AgeRecommendation ageRecommendation={ageRecommendation} />
        </header>
    )
}
export default SeriesHero
