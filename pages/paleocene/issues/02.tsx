import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
  ...PALEOCENE,
  "@id": "http://keesey-comics.com/paleocene/issues/02",
  abstract: "Sister has been taken from the nest by ... something. Was it really a Hunter, as Brother says? Will the troop believe his story? What really happened to her?",
  copyrightYear: 2020,
  description: "Issue #2 of a comic series about our early primate ancestors.",
  image: "http://keesey-comics.com/images/issues/02/front_cover.png",
  isPartOf: "http://keesey-comics.com/paleocene",
  name: "Paleocene #2",
  position: 2,
  sameAs: "https://www.comixology.com/Paleocene-2/digital-comic/890936",
  url: "http://keesey-comics.com/paleocene/issues/02",
}
const Issue02: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" subject={SUBJECT} />
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="night">
        <IssueHero
          ageRecommendation="9+"
          id="paleocene"
          number={2}
          storeLinks={[
            { type: "gumroad", url: "https://gumroad.com/keesey" },
            { type: "comixology", url: "https://www.comixology.com/Paleocene-2/digital-comic/890936" },
          ]}
          seriesTitle="Paleocene"
        >
          <Link href="/store" passHref>
            <CTA>Get it now!</CTA>
          </Link>
        </IssueHero>
        <ComicStrip>
          <TextPanel>Sister has been taken from the nest by ... something.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02/01.png" width={189} />
          <TextPanel>Was it really a Hunter, as Brother says?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02/02.png" width={162} />
          <TextPanel>Will the troop believe his story?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02/03.png" width={380} />
          <TextPanel>What really happened to her?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02/04.png" width={240} />
        </ComicStrip>
        <IssuePromos id="paleocene" numbers={[1, 3]}>Read the other issues!</IssuePromos>
        <SocialNav />
      </Layout>
    </>
  )
}
export default Issue02
