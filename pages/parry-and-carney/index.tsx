import type { NextPage } from "next"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import SocialNav from "~/components/SocialNav"
import PARRY_AND_CARNEY from "~/schema/PARRY_AND_CARNEY"
const Page: NextPage = () => {
    return (
        <OrderContainer>
            <Head favIconType="parry-and-carney" socialImagePath="/parry-and-carney" subject={PARRY_AND_CARNEY} />
            <Layout headerPromos={["parry-and-carney"]} footerPromos={["paleocene", "pleistocene"]} theme="webcomic">
                <SeriesHero
                    ageRecommendation="17+"
                    id="parry-and-carney"
                    storeLinks={[{ type: "gumroad", url: "//keesey.gumroad.com/l/parry-and-carney" }]}
                    title="Parry 'n' Carney: Friends for Life"
                />
                <ComicStrip>
                    <ImagePanel height={170} src="/images/issues/parry-and-carney/01.png" width={170} alt="Parry: &quot;Hey there! I'm Parry the Parasaurolophus, and this is my buddy, Carney the Carnotaurus!&quot; Carney: &quot;Heh-lo.&quot;" />
                    <ImagePanel height={170} src="/images/issues/parry-and-carney/02.png" width={170} alt="Parry: &quot;Together we will provide you, the reader, with hours of rollicksome entertainment in this finely-crafted comic strip!&quot; Carney: &quot;Yeah...&quot;" />
                    <ImagePanel height={170} src="/images/issues/parry-and-carney/03.png" width={170} alt="Carney stares ominously at Parry." />
                    <TextPanel emphatic>Oh, the things that happen next!</TextPanel>
                </ComicStrip>
                <SocialNav />
            </Layout>
        </OrderContainer>
    )
}
export default Page
