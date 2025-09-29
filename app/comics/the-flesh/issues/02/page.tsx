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
import Link from "next/link"
import { THE_FLESH_02, THE_FLESH_02_ABSTRACT_HTML } from "./schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(THE_FLESH_02),
  alternates: { canonical: "/comics/the-flesh/issues/02" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/the-flesh/issues/02" },
}
export default function TheFlesh02() {
  return (
    <>
      <Schema thing={THE_FLESH_02} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("The Flesh", "/comics/the-flesh", 2)}
      />
      <SectionsContainer>
        <CreativeWorkSections
          subject={THE_FLESH_02}
          abstractHTML={THE_FLESH_02_ABSTRACT_HTML}
          creator={GAGE_ULLMAN}
        >
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>40 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(THE_FLESH_02.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>17+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "The Flesh #2 - Front Cover",
              imgSrc: "/comics/the-flesh/issues/02/front_cover.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-ST2"].details}</Definitions>
            <AddToCartCTA productIds={["COB-ST2-FLE-02A"]} href="/cart" />
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
    </>
  )
}
