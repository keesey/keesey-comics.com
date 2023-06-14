import type { NextPage } from "next"
import Image from "next/image"
import type { ComicStory } from "schema-dts"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ProductSchema from "~/components/metadata/ProductSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/04",
    abstract: "The search for Sister continues through the dead of winter. But the spring thaw brings bigger dangers.",
    copyrightYear: 2023,
    description: "Issue #4 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/04/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #4",
    position: 4,
    url: "https://www.keesey-comics.com/paleocene/issues/04",
}
const PRODUCT_ID = "COB-STD-PAL-03A"
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/04" subject={SUBJECT}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "parry-and-carney"]} theme="night">
                <IssueHero ageRecommendation="9+" id="paleocene" number={4} seriesTitle="Paleocene">
                    <div style={{ fontSize: "1.6rem" }}>
                        <ComicText>Coming soon.</ComicText>
                    </div>
                    <CTA href="/mailinglist">Sign up for updates!</CTA>
                    <CTA href="//www.patreon.com/tmkeesey">
                        <span>
                            <ComicText>{"Follow the progress on "}</ComicText>
                            <Image
                                alt="Patreon"
                                width={(18 * 3417.3201) / 474.92001}
                                height={18}
                                src="/images/logos/black/patreon.svg"
                            />
                        </span>
                    </CTA>
                </IssueHero>
                <IssuePromos id="paleocene" numbers={[1, 2, 3]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
