import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/06",
    abstract: "The final chapter in Mamma's quest to reunite her family and her troop.",
    copyrightYear: 2026,
    description: "Issue #6 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/paleocene/06/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #6",
    position: 6,
    url: "https://www.keesey-comics.com/paleocene/issues/06",
}
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/06" subject={SUBJECT} author={MIKE_KEESEY} />
            <Layout
                headerPromos={["paleocene"]}
                footerPromos={["parry-and-carney", "the-flesh", "pleistocene"]}
                theme="night"
            >
                <IssueHero
                    ageRecommendation="9+"
                    author="Mike Keesey"
                    id="paleocene"
                    number={6}
                    seriesTitle="Paleocene"
                >
                    <ComicText>Coming next year!</ComicText>
                    <Link href="/newsletter" legacyBehavior passHref>
                        <CTA>
                            <ComicText>Subscribe for Updates</ComicText>
                        </CTA>
                    </Link>
                </IssueHero>
                <IssuePromos id="paleocene" numbers={[1, 2, 3, 4, 5]}>
                    Catch up on earlier issues!
                </IssuePromos>
            </Layout>
        </OrderContainer>
    )
}
export default Page
