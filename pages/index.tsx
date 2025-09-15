import type { NextPage } from "next"
import OrderContainer from "~/cart/context/order/OrderContainer"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ItemListSchema from "~/components/metadata/ItemListSchema"
import Schema from "~/components/metadata/Schema"
import SeriesPromo from "~/components/promos/SeriesPromo"
import KEESEY_COMICS from "~/schema/KEESEY_COMICS"
import KEESEY_COMICS_WEBSITE from "~/schema/KEESEY_COMICS_WEBSITE"
const Home: NextPage = () => {
    return (
        <OrderContainer>
            <Head subject={KEESEY_COMICS}>
                <Schema key="script:schema:website" thing={KEESEY_COMICS_WEBSITE} />
                <ItemListSchema
                    urls={[
                        "https://www.keesey-comics.com/paleocene",
                        "https://www.keesey-comics.com/parry-and-carney",
                        "https://www.keesey-comics.com/pleistocene",
                        "https://www.keesey-comics.com/store",
                    ]}
                />
            </Head>
            <Layout theme="kc">
                <SeriesPromo id="paleocene">
                    Sixty-six million years ago, the world nearly ended. But our tiny, furry ancestors survived, in
                    the...
                </SeriesPromo>
                <hr />
                <SeriesPromo id="the-flesh">From a sleepy suburb, a grotesque abomination emerges, in...</SeriesPromo>
                <hr />
                <SeriesPromo id="parry-and-carney">The boys are back, in...</SeriesPromo>
                <hr />
                <SeriesPromo id="pleistocene">
                    He told himself he was the greatest hero of his age -- the noblest human being of the...
                </SeriesPromo>
            </Layout>
        </OrderContainer>
    )
}
export default Home
