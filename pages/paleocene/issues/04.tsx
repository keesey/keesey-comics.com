import type { NextPage } from "next"
import type { ComicStory } from "schema-dts"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ProductSchema from "~/components/metadata/ProductSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import IncrementQuantityCTA from "~/components/store/IncrementQuantityCTA"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/04",
    abstract: "The search for Sister continues through the dead of winter. But the spring thaw brings bigger dangers.",
    copyrightYear: 2023,
    description: "Issue #4 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/paleocene/04/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #4",
    position: 4,
    url: "https://www.keesey-comics.com/paleocene/issues/04",
}
const PRODUCT_ID = "COB-STD-PAL-04A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/04" subject={SUBJECT} author={MIKE_KEESEY}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "parry-and-carney"]} theme="night">
                <IssueHero
                    ageRecommendation="9+"
                    id="paleocene"
                    number={4}
                    seriesTitle="Paleocene"
                    storeLinks={[{ type: "gumroad", url: "//gumroad.com/keesey" }]}
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <ComicStrip>
                    <TextPanel>
                        Mamma and Brother continue their search for Sister ... now in the freezing cold of winter.
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04/01.png" width={(280 * 1178) / 767} />
                    <TextPanel>Could the little child possibly have survived?</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04/02.png" width={(280 * 680) / 899} />
                    <TextPanel>What will happen to Auntie and the rest of the troop in their absence?</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04/03.png" width={(280 * 818) / 692} />
                    <TextPanel>And, as Brother grows up, will he stay with his Mamma?</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04/04.png" width={(280 * 812) / 676} />
                    <TextPanel emphatic>Discover Sister&apos;s fate!</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04/05.png" width={(280 * 1218) / 1027} />
                </ComicStrip>
                <IssuePromos id="paleocene" numbers={[1, 2, 3]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
