import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
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
import { PRODUCT_TYPES_MAP } from "@/lib/cart/constants/PRODUCT_TYPES"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import Link from "next/link"
import { DigitalEditionDefinitions } from "../../_components/DigitalEditionDefinitions"
import { PALEOCENE_04 } from "./schema"
import { TrailerSection } from "@/components/TrailerSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE_04),
  alternates: { canonical: "/comics/paleocene/issues/04" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/paleocene/issues/04" },
}
export default function Paleocene04() {
  return (
    <>
      <Schema thing={PALEOCENE_04} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("Paleocene", "/comics/paleocene", 4)}
      />
      <SectionsContainer>
        <CreativeWorkSections subject={PALEOCENE_04} creator={MIKE_KEESEY}>
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>24 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(PALEOCENE_04.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>9+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Paleocene #4 - Front Cover",
              imgSrc: "/comics/paleocene/issues/04/front_cover.png",
            },
            {
              alt: "Paleocene #4 - Page 1",
              imgSrc: "/comics/paleocene/issues/04/01.png",
            },
            {
              alt: "Paleocene #4 - Page 2",
              imgSrc: "/comics/paleocene/issues/04/02.png",
            },
            {
              alt: "Paleocene #4 - Page 3",
              imgSrc: "/comics/paleocene/issues/04/03.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-STD"].details}</Definitions>
            <AddToCartCTA productIds={["COB-STD-PAL-04A"]} href="/cart" />{" "}
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
          <EditionSection title="Digital Edition">
            <DigitalEditionDefinitions />
            <a
              href="https://www.patreon.com/tmkeesey/shop/paleocene-4-digital-comic-1430163?source=storefront"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Read It Now</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
      <TrailerSection title="Paleocene #4" source="vimeo" videoId="852817785">
        Watch the Trailer
      </TrailerSection>
    </>
  )
}
