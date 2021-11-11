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
import Quote from "~/components/Quote"
import SocialNav from "~/components/SocialNav"
import PALEOCENE from "~/schema/PALEOCENE"
const SUBJECT: ComicStory = {
  ...PALEOCENE,
  "@id": "http://keesey-comics.com/paleocene/issues/03",
  abstract: "On one continent, a lonely bird starves in the wasteland. On another, a band of primates searches for a new home. See what happens when continents collide!",
  copyrightYear: 2021,
  description: "Issue #3 of a comic series about our early primate ancestors.",
  image: "http://keesey-comics.com/images/issues/03/front_cover.png",
  isPartOf: "http://keesey-comics.com/paleocene",
  name: "Paleocene #3",
  position: 1,
  sameAs: "https://www.comixology.com/Paleocene-1/digital-comic/812491",
  url: "http://keesey-comics.com/paleocene/issues/03",
}
const Issue03: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" socialImagePath="/paleocene/03" subject={SUBJECT} />
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="day">
        <IssueHero
          ageRecommendation="9+"
          id="paleocene"
          number={3}
          seriesTitle="Paleocene"
        >
          <Link href="/store" passHref>
            <CTA>Get it now!</CTA>
          </Link>
        </IssueHero>
        <Quote
          attribution={<>Daniel Bensen (<cite>First Knife</cite>, <cite>Junction</cite>)</>}
          href="http://www.thekingdomsofevil.com/?p=8983"
        >
          The birds&rsquo; world is operatic and grand.
        </Quote>
        <ComicStrip>
          <TextPanel emphatic>We all recall the World-End...</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03/01.png" width={310} />
          <TextPanel emphatic>...the Fire-Quake, the Rising Sea, the Storm of Stones.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03/02.png" width={284} />
          <TextPanel emphatic>it left a Shroud above our Heads that slew the Sun, and lay my northern Province bare.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03/03.png" width={380} />
          <TextPanel emphatic>in lonely Stillness, Signs of Life cannot be found, save where, in Silt turned hard as Stone...</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03/04.png" width={286} />
          <TextPanel emphatic>...the Great Ones strode.</TextPanel>
        </ComicStrip>
        <IssuePromos id="paleocene" numbers={[1, 2]}>Read the other issues!</IssuePromos>
        <SocialNav />
      </Layout>
    </>
  )
}
export default Issue03
