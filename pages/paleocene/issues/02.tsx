import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Nav from "~/components/Layout/Nav"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
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
          <CTA href="/store">
              Buy it!
          </CTA>
        </IssueHero>
         <ComicStrip>
          <TextPanel>Sister has been taken from the nest by ... something.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/01.png" width={322} />
          <TextPanel>Was it really a Hunter, as Brother says?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02.png" width={209} />
          <TextPanel>Will the troop believe his story?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03.png" width={498} />
          <TextPanel>What really happened to her?</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/04.png" width={203} />
        </ComicStrip>
        <IssuePromos id="paleocene" numbers={[1, 3]}>Read the other issues!</IssuePromos>
        <Nav>
          <ComicText>Translations:</ComicText>
          <Link href="/paleocene/issues/01/ko" passHref>
            <CTA hrefLang="ko">
              <ComicText lang="ko">한국어</ComicText>
              <ComicText> (Korean)</ComicText>
            </CTA>
          </Link>
        </Nav>
      </Layout>
    </>
  )
}
export default Issue02
