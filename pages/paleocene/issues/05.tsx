import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Logo from "~/components/Logo"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/05",
    abstract: ":TODO:",
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
                    <p>
                        <ComicText emphatic>Coming later this year!</ComicText>
                    </p>
                    <p>
                        <ComicText>Want to be notified early?</ComicText>
                    </p>
                    <Link href="/mailinglist" legacyBehavior passHref>
                        <CTA>
                            <ComicText>Join the mailing list</ComicText>
                        </CTA>
                    </Link>
                    <CTA href="//patreon.com/tmkeesey">
                        <ComicText>Follow on</ComicText>
                        <br />
                        <Logo color="black" type="patreon" width={158} height={42} />
                    </CTA>
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
