import type { NextPage } from "next"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import SeriesPromo from "~/components/promos/SeriesPromo"
import SocialNav from "~/components/SocialNav"
import KEESEY_COMICS from "~/schema/KEESEY_COMICS"
const Home: NextPage = () => {
  return (
    <>
      <Head subject={KEESEY_COMICS} />
      <Layout theme="kc">
        <SeriesPromo id="paleocene">Sixty-six million years ago, the world nearly ended. But our tiny, furry ancestors survived, in the...</SeriesPromo>
        <hr />
        <SeriesPromo id="pleistocene">He told himself he was the greatest hero of his age -- the noblest human being of the...</SeriesPromo>
        <hr />
        <SocialNav />
      </Layout>
    </>
  )
}
export default Home
