import type { NextPage } from "next"
import ComicStrip from "~/components/ComicStrip"
import ImageCell from "~/components/ComicStrip/ImageCell"
import TextCell from "~/components/ComicStrip/TextCell"
import SeriesHero from "~/components/heros/SeriesHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import PALEOCENE from "~/schema/PALEOCENE"
const Paleocene: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" subject={PALEOCENE} />
      <Layout theme="night">
        <SeriesHero
          ageRecommendation="9+"
          id="paleocene"
          storeLinks={[
            { type: "Gumroad", url: "https://gumroad.com/keesey" },
            { type: "comiXology", url: "https://www.comixology.com/Paleocene-Vol-1/comics-series/137451" },
          ]}
          title="Paleocene"
        />
        <ComicStrip>
          <TextCell>Sixty-six million years ago, an asteroid slammed into the Earth, killing three quarters of all living things.</TextCell>
          <ImageCell height={280} src="/cells/paleocene/01.png" width={322} />
          <TextCell>But our tiny ancestors survived.</TextCell>
          <ImageCell height={280} src="/cells/paleocene/02.png" width={209} />
          <TextCell>With clutched hands and shining eyes, they witnessed the end of the world...</TextCell>
          <ImageCell height={280} src="/cells/paleocene/03.png" width={498} />
          <TextCell>...and the early dawn of a new one.</TextCell>
          <ImageCell height={280} src="/cells/paleocene/04.png" width={203} />
        </ComicStrip>
      </Layout>
    </>
  )
}
export default Paleocene
