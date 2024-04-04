import type { NextPage } from "next"
import type { ComicStory } from "schema-dts"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ProductSchema from "~/components/metadata/ProductSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import IncrementQuantityCTA from "~/components/store/IncrementQuantityCTA"
import GAGE_ULLMAN from "~/schema/GAGE_ULLMAN"
import THE_FLESH from "~/schema/THE_FLESH"
const SUBJECT: ComicStory = {
    ...THE_FLESH,
    "@id": "https://www.keesey-comics.com/the-flesh/issues/03",
    abstract: "Lorem ipsum dolor sit amet.",
    copyrightYear: 2024,
    description: "Lorem ipsum dolor sit amet.",
    image: "https://www.keesey-comics.com/images/issues/the-flesh/03/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/the-flesh",
    name: "The Flesh #3",
    position: 3,
    url: "https://www.keesey-comics.com/the-flesh/issues/03",
}
const PRODUCT_ID = "COB-ST2-FLE-03A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh/03" subject={SUBJECT} author={GAGE_ULLMAN}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout
                headerPromos={["the-flesh"]}
                footerPromos={["paleocene", "parry-and-carney", "pleistocene"]}
                theme="hell"
            >
                <IssueHero ageRecommendation="17+" id="the-flesh" number={3} seriesTitle="The Flesh">
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <IssuePromos id="the-flesh" numbers={[1, 2]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
