import type { NextPage } from "next"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ItemListSchema from "~/components/metadata/ItemListSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import GAGE_ULLMAN from "~/schema/GAGE_ULLMAN"
import THE_FLESH from "~/schema/THE_FLESH"
const PRODUCT_IDS = ["COB-ST2-FLE-01A", "COB-ST2-FLE-02A", "COB-ST2-FLE-03A"]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh" subject={THE_FLESH} author={GAGE_ULLMAN}>
                <ItemListSchema
                    urls={[
                        "https://www.keesey-comics.com/the-flesh/issues/01",
                        "https://www.keesey-comics.com/the-flesh/issues/02",
                        "https://www.keesey-comics.com/the-flesh/issues/03",
                    ]}
                />
            </Head>
            <Layout
                headerPromos={["the-flesh"]}
                footerPromos={["paleocene", "parry-and-carney", "pleistocene"]}
                theme="hell"
            >
                <SeriesHero ageRecommendation="17+" id="the-flesh" productIds={PRODUCT_IDS} title="The Flesh" />
                <ComicStrip>
                    <TextPanel>
                        <p>A quiet night.</p>
                        <p>Then ... dread</p>
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/01.jpg" width={1914 / 2} />
                    <TextPanel>Chaos.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/02.jpg" width={1470 / 2} />
                    <TextPanel>Carnage.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/03.jpg" width={1072 / 2} />
                    <TextPanel>No one is safe...</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/04.jpg" width={1418 / 2} />
                    <TextPanel>
                        ...from{" "}
                        <span>
                            <cite>The Flesh</cite>
                            <i>!</i>
                        </span>
                    </TextPanel>
                </ComicStrip>
                <IssuePromos id="the-flesh" numbers={[1, 2, 3]}>
                    Read all the issues!
                </IssuePromos>
                {/* :TODO: Add merch? */}
                <br />
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
