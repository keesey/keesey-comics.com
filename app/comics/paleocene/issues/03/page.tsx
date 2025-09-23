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
import { PALEOCENE_03 } from "./schema"
import { TrailerSection } from "@/components/TrailerSection"
import type { Metadata } from "next"
import { METADATA_BASE } from "@/app/_lib/METADATA_BASE"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE_03),
  alternates: { canonical: "/comics/paleocene/issues/03" },
  metadataBase: METADATA_BASE,
}
export default function Paleocene03() {
  return (
    <>
      <Schema thing={PALEOCENE_03} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("Paleocene", "/comics/paleocene", 3)}
      />
      <SectionsContainer>
        <CreativeWorkSections subject={PALEOCENE_03} creator={MIKE_KEESEY}>
          <ReviewsSection>
            <Quote
              attribution={
                <>
                  Daniel Bensen (<cite>First Knife</cite>, <cite>Junction</cite>
                  )
                </>
              }
            >
              The birds’ world is operatic and grand.
            </Quote>
            <Quote
              attribution={
                <>
                  Andrew Stück, <cite>Dino Dad Reviews</cite>
                </>
              }
              cite="https://dinodadreviews.com/2022/01/05/paleocene-issues-1-3"
            >
              Fascinating story … with an empathetic dilemma.
            </Quote>
          </ReviewsSection>
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>28 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(PALEOCENE_03.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>9+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Paleocene #3 - Front Cover",
              imgSrc: "/comics/paleocene/issues/03/front_cover.png",
            },
            {
              alt: "Paleocene #3 - Page 1",
              imgSrc: "/comics/paleocene/issues/03/01.png",
            },
            {
              alt: "Paleocene #3 - Page 7",
              imgSrc: "/comics/paleocene/issues/03/07.png",
            },
            {
              alt: "Paleocene #4 - Page 16",
              imgSrc: "/comics/paleocene/issues/03/16.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-STD"].details}</Definitions>
            <AddToCartCTA productIds={["COB-STD-PAL-03A"]} href="/cart" />
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
          <EditionSection title="Digital Edition">
            <DigitalEditionDefinitions />
            <a
              href="https://www.patreon.com/tmkeesey/shop/paleocene-3-digital-comic-1430199?source=storefront"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Read It Now</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
      <TrailerSection
        title="Paleocene #3"
        source="youtube"
        videoId="_wH8O__uhEA"
      >
        Watch the Trailer
      </TrailerSection>
    </>
  )
}
