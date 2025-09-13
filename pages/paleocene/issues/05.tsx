import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
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
const PRODUCT_ID = "COB-STD-PAL-05A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/05" subject={SUBJECT} author={MIKE_KEESEY} >
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
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
                    storeLinks={[{ type: "patreon", url: "//www.patreon.com/tmkeesey/shop?source=keesey-comics" }]}
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <ComicStrip>
                    <TextPanel>One day while Mamma was out...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/05/01.png" width={261} />
                    <TextPanel emphatic>...Sister was snatched from the nest!</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/05/02.png" width={583} />
                    <TextPanel>Can she possibly escape from such a deadly predator?</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/05/03.png" width={165} />
                    <TextPanel>If she escapes, how can she survive?</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/05/04.png" width={286} />
                    <TextPanel>And if she survives...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/05/05.png" width={255} />
                    <TextPanel emphatic>...will she ever be the same?</TextPanel>
                </ComicStrip>
                <IssuePromos id="paleocene" numbers={[1, 2, 3, 4, 5, 6]}>
                    Read all the issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
