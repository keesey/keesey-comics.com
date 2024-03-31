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
import PALEOCENE from "~/schema/PALEOCENE"
const PRODUCT_IDS = ["COB-ST2-FLE-01A", "COB-ST2-FLE-02A", "COB-ST2-FLE-03A"]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh" subject={PALEOCENE}>
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
                footerPromos={["paleocene", "pleistocene", "parry-and-carney"]}
                theme="hell"
            >
                <SeriesHero ageRecommendation="17+" id="the-flesh" productIds={PRODUCT_IDS} title="The Flesh" />
                <ComicStrip>
                    <TextPanel>Lorem ipsum dolor sit amet.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/01.png" width={280} />
                    <TextPanel>Lorem ipsum dolor sit amet.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/02.png" width={280} />
                    <TextPanel>Lorem ipsum dolor sit amet.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/03.png" width={280} />
                    <TextPanel>Lorem ipsum dolor sit amet.</TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/04.png" width={280} />
                </ComicStrip>
                <IssuePromos id="the-flesh" numbers={[1, 2, 3]}>
                    Read all issues!
                </IssuePromos>
                {/* :TODO: Add merch? */}
                <br />
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
