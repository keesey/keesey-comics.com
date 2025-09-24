import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
import { ReviewsSection } from "@/app/comics/_components/ReviewsSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { createCrumbsForIssue } from "@/app/comics/_lib/createCrumbsForIssue"
import { MIKE_KEESEY } from "@/app/creators/mike-keesey/schema"
import { AddToCartCTA } from "@/components/AddToCartCTA"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTA } from "@/components/CTA"
import {
  Definition,
  Definitions,
  DefinitionTerm,
} from "@/components/Definitions"
import { Quote } from "@/components/Quote"
import { PRODUCT_TYPES_MAP } from "@/lib/cart/constants/PRODUCT_TYPES"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import Link from "next/link"
import { DigitalEditionDefinitions } from "../../_components/DigitalEditionDefinitions"
import { PALEOCENE_02 } from "./schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE_02),
  alternates: { canonical: "/comics/paleocene/issues/02" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/paleocene/issues/02" },
}
export default function Paleocene02() {
  return (
    <>
      <Schema thing={PALEOCENE_02} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("Paleocene", "/comics/paleocene", 2)}
      />
      <SectionsContainer>
        <CreativeWorkSections subject={PALEOCENE_02} creator={MIKE_KEESEY}>
          <ReviewsSection>
            <Quote
              attribution={
                <>
                  Madeleine Holly-Rosing, <cite>Fanbase Press</cite>
                </>
              }
              cite="https://fanbasepress.com/index.php/press/reviews/item/12295-paleocene-1-3-comic-book-review"
            >
              Our hearty little family of proto-primates is charming.
            </Quote>
          </ReviewsSection>
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>24 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(PALEOCENE_02.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>9+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Paleocene #2 - Front Cover",
              imgSrc: "/comics/paleocene/issues/02/front_cover.png",
            },
            {
              alt: "Paleocene #2 - Page 1",
              imgSrc: "/comics/paleocene/issues/02/01.png",
            },
            {
              alt: "Paleocene #2 - Page 2",
              imgSrc: "/comics/paleocene/issues/02/02.png",
            },
            {
              alt: "Paleocene #2 - Page 3",
              imgSrc: "/comics/paleocene/issues/02/03.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-STD"].details}</Definitions>
            <AddToCartCTA productIds={["COB-STD-PAL-02A"]} href="/cart" />
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
          <EditionSection title="Digital Edition">
            <DigitalEditionDefinitions />
            <a
              href="https://www.patreon.com/tmkeesey/shop/paleocene-2-digital-comic-1430386?source=storefront"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Read It Now</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
    </>
  )
}
