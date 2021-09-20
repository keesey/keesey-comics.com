import type { NextPage } from "next"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import CTA from "~/components/CTA"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import PALEOCENE from "~/schema/PALEOCENE"
const Paleocene: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" subject={PALEOCENE} />
      <Layout footerPromos={["pleistocene", "phylopic"]} theme="night">
        <SeriesHero
          ageRecommendation="9+"
          id="paleocene"
          storeLinks={[
            { type: "gumroad", url: "https://gumroad.com/keesey" },
            { type: "comixology", url: "https://www.comixology.com/Paleocene-Vol-1/comics-series/137451" },
          ]}
          title="Paleocene"
        />
        <ComicStrip>
          <TextPanel>Sixty-six million years ago, an asteroid slammed into the Earth, killing three quarters of all living things.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/01.png" width={322} />
          <TextPanel>But our tiny ancestors survived.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02.png" width={209} />
          <TextPanel>With clutched hands and shining eyes, they witnessed the end of the world...</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03.png" width={498} />
          <TextPanel>...and the early dawn of a new one.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/04.png" width={203} />
        </ComicStrip>
        <br />
        <CTA href="https://gumroad.com/keesey">
          Read it!
        </CTA>
      </Layout>
    </>
  )
}
export default Paleocene
