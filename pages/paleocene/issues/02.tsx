import type { NextPage } from "next"
import Link from "next/link"
import type { ComicStory } from "schema-dts"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import OrderContainer from "~/cart/context/order/OrderContainer"
import ComicStrip from "~/components/ComicStrip"
import ImagePanel from "~/components/ComicStrip/ImagePanel"
import TextPanel from "~/components/ComicStrip/TextPanel"
import CTA from "~/components/CTA"
import IssueHero from "~/components/heroes/IssueHero"
import Layout from "~/components/Layout"
import Head from "~/components/metadata/Head"
import ProductSchema from "~/components/metadata/ProductSchema"
import IssuePromos from "~/components/promos/IssuePromos.tsx"
import SocialNav from "~/components/SocialNav"
import IncrementQuantityCTA from "~/components/store/IncrementQuantityCTA"
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
const PRODUCT_ID = "COB-STD-PAL-02A"
const Page: NextPage = () => {
  return (
    <OrderContainer>
      <Head favIconType="paleocene" socialImagePath="/paleocene/02" subject={SUBJECT}>
        <ProductSchema product={PRODUCTS_MAP[PRODUCT_ID]} />
      </Head>
      <Layout headerPromos={["paleocene"]} footerPromos={["pleistocene", "phylopic"]} theme="night">
        <IssueHero
          ageRecommendation="9+"
          id="paleocene"
          number={2}
          storeLinks={[
            { type: "gumroad", url: "//gumroad.com/keesey" },
            { type: "comixology", url: "//www.comixology.com/Paleocene-2/digital-comic/890936" },
          ]}
          seriesTitle="Paleocene"
        >
          <IncrementQuantityCTA href="/cart" productId={PRODUCT_ID} />
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
    </OrderContainer>
  )
}
export default Page
