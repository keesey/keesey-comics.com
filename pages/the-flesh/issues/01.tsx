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
    "@id": "https://www.keesey-comics.com/the-flesh/issues/01",
    abstract: "In a quiet neighborhood shaken by the sudden emergence of a grotesque abomination, its insatiable hunger leaving a trail of carnage and terror, a varied group of survivors grapple with fear, mistrust, and their primal instincts for self-preservation. As the creature's rampage unfolds, the unlikely survivors emerge, each with their own motives and secrets. Amidst the turmoil, the survivors are forced to confront the grim reality of a world spiraling into oblivion as the situation escalates, revealing the true nature of humanity in the face of unspeakable horror.",
    copyrightYear: 2021,
    description: "The first issue of The Flesh.",
    image: "https://www.keesey-comics.com/images/issues/the-flesh/01/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/the-flesh",
    name: "The Flesh #1",
    position: 1,
    url: "https://www.keesey-comics.com/the-flesh/issues/01",
}
const PRODUCT_ID = "COB-ST2-FLE-01A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh/01" subject={SUBJECT} author={GAGE_ULLMAN}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout
                headerPromos={["the-flesh"]}
                footerPromos={["paleocene", "parry-and-carney", "pleistocene"]}
                theme="hell"
            >
                <IssueHero ageRecommendation="17+" id="the-flesh" number={1} seriesTitle="The Flesh">
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <IssuePromos id="the-flesh" numbers={[2, 3]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
