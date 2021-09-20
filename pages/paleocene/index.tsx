import type { NextPage } from "next"
import Link from "next/link"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import ComicText from "~/components/ComicText"
import CTA from "~/components/CTA"
import SeriesHero from "~/components/heroes/SeriesHero"
import Layout from "~/components/Layout"
import Nav from "~/components/Layout/Nav"
import Head from "~/components/metadata/Head"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import Quote from "~/components/Quote"
import PALEOCENE from "~/schema/PALEOCENE"
const Paleocene: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" subject={PALEOCENE} />
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="night">
        <SeriesHero
          ageRecommendation="9+"
          id="paleocene"
          storeLinks={[
            { type: "gumroad", url: "https://gumroad.com/keesey" },
            { type: "comixology", url: "https://www.comixology.com/Paleocene-Vol-1/comics-series/137451" },
          ]}
          title="Paleocene"
        />
        <Quote
          attribution={<>Daniel Bensen (<cite>First Knife</cite>, <cite>Junction</cite>)</>}
          href="http://www.thekingdomsofevil.com/?p=8983"
        >
            ★★★★
        </Quote>
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
        <IssuePromos id="paleocene" first={1} last={3}>Read all issues!</IssuePromos>
        <Nav>
          <ComicText>Translations:</ComicText>
          <Link href="/paleocene/ko" passHref>
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
export default Paleocene
