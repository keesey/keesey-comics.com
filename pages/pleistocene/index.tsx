import type { NextPage } from "next"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import CTA from "~/components/CTA"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import SocialNav from "~/components/SocialNav"
import PLEISTOCENE from "~/schema/PLEISTOCENE"
const Paleocene: NextPage = () => {
  return (
    <>
      <Head favIconType="pleistocene" socialImagePath="/pleistocene" subject={PLEISTOCENE} />
      <Layout headerPromos={["pleistocene"]} footerPromos={["paleocene", "phylopic"]} theme="bw">
        <SeriesHero
          ageRecommendation="17+"
          id="pleistocene"
          storeLinks={[
            { type: "gumroad", url: "//gumroad.com/keesey" },
            { type: "comixology", url: "//www.comixology.com/Pleistocene/comics-series/117874" },
          ]}
          title="Pleistocene"
        />
        <ComicStrip>
          <TextPanel>He was a brave hero, a great hunter, a natural leader of men...</TextPanel>
          <ImagePanel height={280} src="/images/issues/pleistocene/01.png" width={377} />
          <TextPanel>...or so he thought of himself.</TextPanel>
          <ImagePanel height={280} src="/images/issues/pleistocene/02.png" width={333} />
          <TextPanel>Ridiculed by his people, he undertook a quest across the desert to find a new homeland.</TextPanel>
          <ImagePanel height={185} src="/images/issues/pleistocene/03.png" width={610} />
          <TextPanel>Like every hero, he encountered a monster...</TextPanel>
          <ImagePanel height={280} src="/images/issues/pleistocene/04.png" width={509} />
          <TextPanel emphatic>...or was it something else?</TextPanel>
        </ComicStrip>
        <SocialNav />
      </Layout>
    </>
  )
}
export default Paleocene
