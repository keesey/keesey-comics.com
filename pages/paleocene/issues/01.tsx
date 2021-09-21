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
    "@id": "http://keesey-comics.com/paleocene/issues/01",
    abstract: "Mamma loves telling her babies about the &quot;dragons&quot; that used to roam the Earth. But with Pappa gone for days, she is starting to tire of being stuck in the nest. Does she dare leave the infants alone? It is a dangerous world ... and &quot;dragons&quot; may still lurk in the hills.",
    copyrightYear: 2020,
    description: "Issue #1 of a comic series about our early primate ancestors.",
    image: "http://keesey-comics.com/images/issues/01/front_cover.png",
    isPartOf: "http://keesey-comics.com/paleocene",
    name: "Paleocene #1",
    position: 1,
    sameAs: "https://www.comixology.com/Paleocene-1/digital-comic/812491",
    url: "http://keesey-comics.com/paleocene/issues/01",
}
const Issue01: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" subject={SUBJECT} />
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="night">
        <IssueHero
          ageRecommendation="9+"
          id="paleocene"
          number={1}
          storeLinks={[
            { type: "gumroad", url: "https://gumroad.com/keesey" },
            { type: "comixology", url: "https://www.comixology.com/Paleocene-1/digital-comic/812491" },
          ]}
          seriesTitle="Paleocene"
        >
          <CTA href="/store">
              Buy it!
          </CTA>
        </IssueHero>
        <ComicStrip>
          <TextPanel>Mamma loves telling her babies about the &quot;dragons&quot; that used to roam the Earth.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/01.png" width={322} />
          <TextPanel>But with Pappa gone for days, she is starting to tire of being stuck in the nest.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02.png" width={209} />
          <TextPanel>Does she dare leave the infants alone? It is a dangerous world...</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03.png" width={498} />
          <TextPanel>...and &quot;dragons&quot; may still lurk in the hills.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/04.png" width={203} />
        </ComicStrip>
        <IssuePromos id="paleocene" numbers={[2, 3]}>Read the other issues!</IssuePromos>
        <Nav>
          <ComicText>Translations:</ComicText>
          <Link href="/paleocene/issues/01/ko" passHref>
            <CTA hrefLang="ko">
              <ComicText lang="ko">한국어</ComicText>
              <ComicText> (Korean)</ComicText>
            </CTA>
          </Link>
          <CTA href="//fourcatspress.com/catalog/paleontology/paleocene/" hrefLang="it" target="_blank" rel="noreferrer">
            <ComicText lang="it">Italiano</ComicText>
            <ComicText> (Italian)</ComicText>
            <br />
            <ComicText emphatic>(Most artwork differs.)</ComicText>
          </CTA>
          <CTA href="//www.revistadelauniversidad.mx/articles/24d183cd-e3d4-4e63-8e9a-16966fa26726/paleoceno" hrefLang="es" target="_blank" rel="noreferrer">
            <ComicText lang="es">Español</ComicText>
            <ComicText> (Spanish)</ComicText>
            <br />
            <ComicText emphatic>(First eight pages only.)</ComicText>
          </CTA>
        </Nav>
      </Layout>
    </>
  )
}
export default Issue01
