import type { NextPage } from "next"
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
import Nav from "~/components/Layout/Nav"
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
    "@id": "https://www.keesey-comics.com/paleocene/issues/01",
    abstract:
        "Mamma loves telling her babies about the &quot;dragons&quot; that used to roam the Earth. But with Pappa gone for days, she is starting to tire of being stuck in the nest. Does she dare leave the infants alone? It is a dangerous world ... and &quot;dragons&quot; may still lurk in the hills.",
    copyrightYear: 2020,
    description: "Issue #1 of a comic series about our early primate ancestors.",
    image: "https://www.keesey-comics.com/images/issues/paleocene/01/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/paleocene",
    name: "Paleocene #1",
    position: 1,
    url: "https://www.keesey-comics.com/paleocene/issues/01",
}
const PRODUCT_ID = "COB-STD-PAL-01B"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene/01" subject={SUBJECT} author={MIKE_KEESEY}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout
                headerPromos={["paleocene"]}
                footerPromos={["parry-and-carney", "the-flesh", "pleistocene"]}
                theme="night"
            >
                <IssueHero
                    ageRecommendation="9+"
                    author="Mike Keesey"
                    id="paleocene"
                    number={1}
                    storeLinks={[{ type: "patreon", url: "//www.patreon.com/tmkeesey/shop?source=keesey-comics" }]}
                    seriesTitle="Paleocene"
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <Quotes
                    quotes={[
                        {
                            attribution: (
                                <>
                                    Andrew Stück, <cite>Dino Dad Reviews</cite>
                                </>
                            ),
                            content: "Desperate times are brought vividly to life.",
                            href: "https://dinodadreviews.com/2022/01/05/paleocene-issues-1-3/",
                            id: "dinodadreviews",
                        },
                        {
                            attribution: (
                                <>
                                    Madeleine Holly-Rosing, <cite>Fanbase Press</cite>
                                </>
                            ),
                            content: "A terrific cliffhanger.",
                            href: "https://fanbasepress.com/index.php/press/reviews/item/12295-paleocene-1-3-comic-book-review",
                            id: "fanbasepress",
                        },
                    ]}
                />
                <ComicStrip>
                    <TextPanel>
                        Mamma loves telling her babies about the &quot;dragons&quot; that used to roam the Earth.
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/01/01.png" width={349} />
                    <TextPanel>
                        But with Pappa gone for days, she is starting to tire of being stuck in the nest.
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/01/02.png" width={209} />
                    <TextPanel>Does she dare leave the infants alone? it is a dangerous world...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/01/03.png" width={498} />
                    <TextPanel>...and &quot;dragons&quot; may still lurk in the hills.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/01/04.png" width={328} />
                </ComicStrip>
                <IssuePromos id="paleocene" numbers={[1, 2, 3, 4, 5]}>
                    Read all the issues!
                </IssuePromos>
                <Nav>
                    <ComicText>Translations:</ComicText>
                    <CTA href="/store">
                        <ComicText lang="ko">한국어</ComicText>
                        <ComicText> (Korean)</ComicText>
                    </CTA>
                    <CTA
                        href="http://fourcatspress.com/catalog/paleontology/paleocene"
                        hrefLang="it"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ComicText lang="it">Italiano</ComicText>
                        <ComicText> (Italian)</ComicText>
                        <br />
                        <ComicText emphatic>(Most artwork differs)</ComicText>
                    </CTA>
                    <CTA
                        href="http://www.revistadelauniversidad.mx/articles/24d183cd-e3d4-4e63-8e9a-16966fa26726/paleoceno"
                        hrefLang="es"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ComicText lang="es">Español</ComicText>
                        <ComicText> (Spanish)</ComicText>
                        <br />
                        <ComicText emphatic>(Eight pages only)</ComicText>
                    </CTA>
                </Nav>
                <br />
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
