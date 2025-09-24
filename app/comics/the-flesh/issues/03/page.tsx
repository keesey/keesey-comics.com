import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { createCrumbsForIssue } from "@/app/comics/_lib/createCrumbsForIssue"
import { GAGE_ULLMAN } from "@/app/creators/gage-ullman/schema"
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
import type { Metadata } from "next"
import Link from "next/link"
import { THE_FLESH_03, THE_FLESH_03_ABSTRACT_HTML } from "./schema"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(THE_FLESH_03),
  alternates: { canonical: "/comics/the-flesh/issues/03" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/the-flesh/issues/03" },
}
export default function TheFlesh03() {
  return (
    <>
      <Schema thing={THE_FLESH_03} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("The Flesh", "/comics/the-flesh", 3)}
      />
      <SectionsContainer>
        <CreativeWorkSections
          subject={THE_FLESH_03}
          abstractHTML={THE_FLESH_03_ABSTRACT_HTML}
          creator={GAGE_ULLMAN}
        >
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>40 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(THE_FLESH_03.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>17+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "The Flesh #3 - Front Cover",
              imgSrc: "/comics/the-flesh/issues/03/front_cover.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-ST2"].details}</Definitions>
            <AddToCartCTA productIds={["COB-ST3-FLE-03A"]} href="/cart" />
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
    </>
  )
}
