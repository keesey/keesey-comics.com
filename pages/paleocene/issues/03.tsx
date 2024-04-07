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
import Quotes from "~/components/Quotes"
import SocialNav from "~/components/SocialNav"
import IncrementQuantityCTA from "~/components/store/IncrementQuantityCTA"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
    ...PALEOCENE,
    "@id": "https://www.keesey-comics.com/paleocene/issues/03",
    abstract:
        "On one continent, a lonely bird starves in the wasteland. On another, a band of primates searches for a new home. See what happens when continents collide!",
    copyrightYear: 2021,
    description: "Issue #3 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/paleocene/03/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #3",
    position: 3,
    url: "https://www.keesey-comics.com/paleocene/issues/03",
}
const PRODUCT_ID = "COB-STD-PAL-03A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/03" subject={SUBJECT} author={MIKE_KEESEY}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout
                headerPromos={["paleocene"]}
                footerPromos={["parry-and-carney", "the-flesh", "pleistocene"]}
                theme="day"
            >
                <IssueHero
                    ageRecommendation="9+"
                    author="Mike Keesey"
                    id="paleocene"
                    number={3}
                    storeLinks={[{ type: "gumroad", url: "//gumroad.com/keesey" }]}
                    seriesTitle="Paleocene"
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <Quotes
                    quotes={[
                        {
                            attribution: (
                                <>
                                    Daniel Bensen (<cite>First Knife</cite>, <cite>Junction</cite>)
                                </>
                            ),
                            content: <>The birds&rsquo; world is operatic and grand.</>,
                            id: "kingdomsofevil",
                        },
                        {
                            attribution: (
                                <>
                                    Andrew Stück, <cite>Dino Dad Reviews</cite>
                                </>
                            ),
                            content: "Fascinating story … with an empathetic dilemma.",
                            href: "https://dinodadreviews.com/2022/01/05/paleocene-issues-1-3/",
                            id: "dinodadreviews",
                        },
                    ]}
                />
                <ComicStrip>
                    <TextPanel emphatic>We all recall the World-End...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/03/01.png" width={310} />
                    <TextPanel emphatic>...the Fire-Quake, the Rising Sea, the Storm of Stones.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/03/02.png" width={284} />
                    <TextPanel emphatic>
                        it left a Shroud above our Heads that slew the Sun, and lay my northern Province bare.
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/03/03.png" width={380} />
                    <TextPanel emphatic>
                        in lonely Stillness, Signs of Life cannot be found, save where, in Silt turned hard as Stone...
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/03/04.png" width={286} />
                    <TextPanel emphatic>...the Great Ones strode.</TextPanel>
                </ComicStrip>
                <IssuePromos id="paleocene" numbers={[1, 2, 4]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
