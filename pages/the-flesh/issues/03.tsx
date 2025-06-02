import type { NextPage } from "next"
import type { ComicStory } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import IncrementQuantityCTA from "~/components/store/IncrementQuantityCTA"
import GAGE_ULLMAN from "~/schema/GAGE_ULLMAN"
import THE_FLESH from "~/schema/THE_FLESH"
const SUBJECT: ComicStory = {
    ...THE_FLESH,
    "@id": "https://www.keesey-comics.com/the-flesh/issues/03",
    abstract:
        "Desperate survivors seek refuge in an emergency shelter. Elsewhere, the remnants of the beast stand as a grotesque monument to the night's horrors. Law enforcement keeps vigil around the carcass. A trio of scientists—dispatched to find answers—only finds more questions about ... THE FLESH!",
    copyrightYear: 2024,
    description: "The third issue of The Flesh.",
    image: "https://www.keesey-comics.com/images/issues/the-flesh/03/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/the-flesh",
    name: "The Flesh #3",
    position: 3,
    url: "https://www.keesey-comics.com/the-flesh/issues/03",
}
const PRODUCT_ID = "COB-ST2-FLE-03A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh/03" subject={SUBJECT} author={GAGE_ULLMAN} />
            <Layout
                headerPromos={["the-flesh"]}
                footerPromos={["paleocene", "parry-and-carney", "pleistocene"]}
                theme="hell"
            >
                <IssueHero
                    ageRecommendation="17+"
                    author="Gage Ullman"
                    id="the-flesh"
                    number={3}
                    seriesTitle="The Flesh"
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <ComicStrip>
                    <TextPanel>
                        <p>Desperate survivors seek refuge in an emergency shelter.</p>
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/03/01.jpg" width={280} />
                    <TextPanel>
                        <p>
                            Elsewhere, the remnants of the beast stand as a grotesque monument to the night&apos;s
                            horrors.
                        </p>
                        <p> Law enforcement keeps vigil around the carcass.</p>
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/03/02.jpg" width={280} />
                    <TextPanel>
                        <p>
                            A trio of scientists <span style={{ whiteSpace: "nowrap" }}>&mdash;dispatched</span> to find{" "}
                            <span style={{ whiteSpace: "nowrap" }}>answers&mdash;</span> only find more questions about
                            &hellip; <em style={{ whiteSpace: "nowrap" }}>the Flesh!</em>
                        </p>
                    </TextPanel>
                </ComicStrip>
                <IssuePromos id="the-flesh" numbers={[1, 2, 3]}>
                    Read all the issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
