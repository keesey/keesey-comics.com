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
import SocialNav from "~/components/SocialNav"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/05",
    abstract: "What happened to Sister after she was snatched from the hollow? Her hardships were only beginning...",
    copyrightYear: 2025,
    description: "Issue #5 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/paleocene/05/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #5",
    position: 5,
    url: "https://www.keesey-comics.com/paleocene/issues/05",
}
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/05" subject={SUBJECT} author={MIKE_KEESEY} />
            <Layout
                headerPromos={["paleocene"]}
                footerPromos={["parry-and-carney", "the-flesh", "pleistocene"]}
                theme="night"
            >
                <IssueHero
                    ageRecommendation="13+"
                    author="Mike Keesey"
                    id="paleocene"
                    number={5}
                    seriesTitle="Paleocene"
                >
                    <ComicText>Coming Soon!</ComicText>
                    <Link href="/newsletter" legacyBehavior passHref>
                        <CTA>
                            <ComicText>Subscribe for Updates</ComicText>
                        </CTA>
                    </Link>
                </IssueHero>
                <IssuePromos id="paleocene" numbers={[1, 2, 3, 4]}>
                    Catch up on earlier issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
