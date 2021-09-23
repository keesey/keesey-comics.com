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
import SocialNav from "~/components/SocialNav"
import PALEOCENE from "~/schema/PALEOCENE"
const Paleocene: NextPage = () => {
  return (
    <>
      <Head favIconType="paleocene" socialImagePath="/paleocene" subject={PALEOCENE} />
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="night">
        <SeriesHero
          ageRecommendation="9+"
          id="paleocene"
          storeLinks={[
            { type: "gumroad", url: "//gumroad.com/keesey" },
            { type: "comixology", url: "//www.comixology.com/Paleocene-Vol-1/comics-series/137451" },
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
          <ImagePanel height={280} src="/images/issues/paleocene/01.png" width={349} />
          <TextPanel>But our tiny ancestors survived.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/02.png" width={240} />
          <TextPanel>With clutched hands and shining eyes, they witnessed the end of the world...</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/03.png" width={605} />
          <TextPanel>...and the early dawn of a new one.</TextPanel>
          <ImagePanel height={280} src="/images/issues/paleocene/04.png" width={166} />
        </ComicStrip>
        <IssuePromos id="paleocene" numbers={[1, 2, 3]}>Read all issues!</IssuePromos>
        <Nav>
          <ComicText>Translations:</ComicText>
          <Link href="/store" passHref>
            <CTA hrefLang="ko">
              <ComicText lang="ko">한국어</ComicText>
              <ComicText> (Korean)</ComicText>
            </CTA>
          </Link>
          <CTA href="http://fourcatspress.com/catalog/paleontology/paleocene" hrefLang="it" target="_blank" rel="noreferrer">
            <ComicText lang="it">Italiano</ComicText>
            <ComicText> (Italian)</ComicText>
            <br />
            <ComicText emphatic>(Most artwork differs)</ComicText>
          </CTA>
          <CTA href="http://www.revistadelauniversidad.mx/articles/24d183cd-e3d4-4e63-8e9a-16966fa26726/paleoceno" hrefLang="es" target="_blank" rel="noreferrer">
            <ComicText lang="es">Español</ComicText>
            <ComicText> (Spanish)</ComicText>
            <br />
            <ComicText emphatic>(Eight pages only)</ComicText>
          </CTA>
        </Nav>
        <br />
        <SocialNav />
      </Layout>
    </>
  )
}
export default Paleocene
