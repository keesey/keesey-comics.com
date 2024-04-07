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
import GAGE_ULLMAN from "~/schema/GAGE_ULLMAN"
import THE_FLESH from "~/schema/THE_FLESH"
const SUBJECT: ComicStory = {
    ...THE_FLESH,
    "@id": "https://www.keesey-comics.com/the-flesh/issues/02",
    abstract:
        "In the dead of night, the aftermath of chaos unfolds. Emergency teams mobilize to contain the carnage, but the terror cannot be restrained. Explosions rend the air, screams pierce the silence, and panicked residents flee for their lives. But can they escape ... the FLESH?",
    copyrightYear: 2022,
    description: "The second issue of The Flesh.",
    image: "https://www.keesey-comics.com/images/issues/the-flesh/02/front_cover.png",
    isPartOf: "https://www.keesey-comics.com/the-flesh",
    name: "The Flesh #2",
    position: 2,
    url: "https://www.keesey-comics.com/the-flesh/issues/02",
}
const PRODUCT_ID = "COB-ST2-FLE-02A"
const PRODUCT_IDS = [PRODUCT_ID]
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="the-flesh" socialImagePath="/the-flesh/02" subject={SUBJECT} author={GAGE_ULLMAN}>
                <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
            </Head>
            <Layout
                headerPromos={["the-flesh"]}
                footerPromos={["paleocene", "parry-and-carney", "pleistocene"]}
                theme="hell"
            >
                <IssueHero
                    ageRecommendation="17+"
                    author="Gage Ullman"
                    id="the-flesh"
                    number={2}
                    seriesTitle="The Flesh"
                >
                    <IncrementQuantityCTA href="/cart" productIds={PRODUCT_IDS} />
                </IssueHero>
                <ComicStrip>
                    <TextPanel>
                        <p>
                            In the dead of night, the aftermath of chaos unfolds. Emergency teams mobilize to contain
                            the carnage, but the terror cannot be restrained.
                        </p>
                        <p>
                            Explosions rend the air, screams pierce the silence, and panicked residents flee for their
                            lives.
                        </p>
                    </TextPanel>
                    <ImagePanel height={280} src="/images/issues/the-flesh/02/01.jpg" width={280} />
                    <TextPanel>
                        But can they escape&hellip;{" "}
                        <span style={{ whiteSpace: "nowrap" }}>
                            the <em>Flesh?</em>
                        </span>
                    </TextPanel>
                </ComicStrip>
                <IssuePromos id="the-flesh" numbers={[1, 3]}>
                    Read the other issues!
                </IssuePromos>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
