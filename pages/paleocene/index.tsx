import type { NextPage } from "next"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Nav from "~/components/Layout/Nav"
import Head from "~/components/metadata/Head"
import ItemListSchema from "~/components/metadata/ItemListSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import Quotes from "~/components/Quotes"
import MIKE_KEESEY from "~/schema/MIKE_KEESEY"
import PALEOCENE from "~/schema/PALEOCENE"
const PRODUCT_IDS = ["COB-STD-PAL-01B", "COB-STD-PAL-02A", "COB-STD-PAL-03A", "COB-STD-PAL-04A", "COB-STD-PAL-05A"]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="paleocene" socialImagePath="/paleocene" subject={PALEOCENE} author={MIKE_KEESEY}>
                <ItemListSchema
                    urls={[
                        "https://www.keesey-comics.com/paleocene/issues/01",
                        "https://www.keesey-comics.com/paleocene/issues/02",
                        "https://www.keesey-comics.com/paleocene/issues/03",
                        "https://www.keesey-comics.com/paleocene/issues/04",
                        "https://www.keesey-comics.com/paleocene/issues/05",
                        "https://www.keesey-comics.com/paleocene/issues/06",
                        "https://www.keesey-comics.com/products/POS-17I-PAL-001",
                        "https://www.keesey-comics.com/products/POS-17I-PAL-002",
                        "https://www.keesey-comics.com/products/POS-17I-PAL-003",
                        "https://www.keesey-comics.com/products/BKM-06I-PAL-001",
                        "https://www.keesey-comics.com/products/STK-02I-PAL-001",
                        "https://www.keesey-comics.com/products/STK-02I-PAL-002",
                    ]}
                />
            </Head>
            <Layout
                headerPromos={["paleocene"]}
                footerPromos={["parry-and-carney", "the-flesh", "pleistocene"]}
                theme="night"
            >
                <SeriesHero
                    ageRecommendation="13+"
                    author="Mike Keesey"
                    id="paleocene"
                    productIds={PRODUCT_IDS}
                    storeLinks={[{ type: "patreon", url: "//www.patreon.com/tmkeesey/shop?source=keesey-comics" }]}
                    title="Paleocene"
                />
                <Quotes
                    quotes={[
                        {
                            attribution: (
                                <>
                                    Daniel Bensen (<cite>First Knife</cite>, <cite>Junction</cite>)
                                </>
                            ),
                            content: "★★★★",
                            id: "kingdomsofevil",
                        },
                        {
                            attribution: (
                                <>
                                    Andrew Stück, <cite>Dino Dad Reviews</cite>
                                </>
                            ),
                            content: "I highly recommend this series … Dino Dad Stomp of Approval!",
                            href: "https://dinodadreviews.com/2022/01/05/paleocene-issues-1-3/",
                            id: "dinodadreviews",
                        },
                    ]}
                />
                <ComicStrip>
                    <TextPanel>
                        Sixty-six million years ago, an asteroid slammed into the Earth, killing three quarters of all
                        living things.
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/01.png" width={280} />
                    <TextPanel>But our tiny ancestors survived.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/02.png" width={240} />
                    <TextPanel>With clutched hands and shining eyes, they witnessed the end of the world...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/03.png" width={605} />
                    <TextPanel>...and the early dawn of a new one.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/paleocene/04.png" width={285.5} />
                </ComicStrip>
                <IssuePromos id="paleocene" numbers={[1, 2, 3, 4, 5, 6]}>
                    Read all the issues!
                </IssuePromos>
                {/* :TODO: Add merch? */}
                <Nav>
                    <ComicText>Translations:</ComicText>
                    <CTA
                        href="//www.patreon.com/tmkeesey/shop/palreose-1-paleocene-1-in-korean-digital-1430942?source=keesey-comics"
                        hrefLang="ko"
                    >
                        <ComicText lang="ko">한국어</ComicText>
                        <ComicText> (Korean)</ComicText>
                    </CTA>
                    <CTA href="//fourcatspress.com/paleocene/" hrefLang="it" target="_blank" rel="noreferrer">
                        <ComicText lang="it">Italiano</ComicText>
                        <ComicText> (Italian)</ComicText>
                        <br />
                        <ComicText emphatic>(Most artwork differs)</ComicText>
                    </CTA>
                    <CTA
                        href="//www.revistadelauniversidad.mx/articles/24d183cd-e3d4-4e63-8e9a-16966fa26726/paleoceno"
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
            </Layout>
        </OrderContainer>
    )
}
export default Page
