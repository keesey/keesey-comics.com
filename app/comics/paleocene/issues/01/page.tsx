import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
import { ReviewsSection } from "@/app/comics/_components/ReviewsSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { Subheading } from "@/app/comics/_components/Subheading"
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
import { TextLink } from "@/components/TextLink"
import { PRODUCT_TYPES_MAP } from "@/lib/cart/constants/PRODUCT_TYPES"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import Link from "next/link"
import { DigitalEditionDefinitions } from "../../_components/DigitalEditionDefinitions"
import { PALEOCENE_01 } from "./schema"
import { TrailerSection } from "@/components/TrailerSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE_01),
  alternates: { canonical: "/comics/paleocene/issues/01" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/paleocene/issues/01" },
}
export default function Paleocene01() {
  return (
    <>
      <Schema thing={PALEOCENE_01} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("Paleocene", "/comics/paleocene", 1)}
      />
      <SectionsContainer>
        <CreativeWorkSections subject={PALEOCENE_01} creator={MIKE_KEESEY}>
          <ReviewsSection>
            <Quote
              attribution={
                <>
                  Andrew Stück, <cite>Dino Dad Reviews</cite>
                </>
              }
              cite="https://dinodadreviews.com/2022/01/05/paleocene-issues-1-3"
            >
              Desperate times are brought vividly to life.
            </Quote>
            <Quote
              attribution={
                <>
                  Madeleine Holly-Rosing, <cite>Fanbase Press</cite>
                </>
              }
              cite="https://fanbasepress.com/index.php/press/reviews/item/12295-paleocene-1-3-comic-book-review"
            >
              A terrific cliffhanger.
            </Quote>
          </ReviewsSection>
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>24 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(PALEOCENE_01.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Full Color</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>9+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Paleocene #1 - Front Cover",
              imgSrc: "/comics/paleocene/issues/01/front_cover.png",
            },
            {
              alt: "Paleocene #1 - Page 1",
              imgSrc: "/comics/paleocene/issues/01/01.png",
            },
            {
              alt: "Paleocene #1 - Page 2",
              imgSrc: "/comics/paleocene/issues/01/02.png",
            },
            {
              alt: "Paleocene #1 - Page 3",
              imgSrc: "/comics/paleocene/issues/01/03.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>{PRODUCT_TYPES_MAP["COB-STD"].details}</Definitions>
            <AddToCartCTA productIds={["COB-STD-PAL-01B"]} href="/cart" />
            <Link href="/contact">
              <CTA level={2}>Bulk Orders</CTA>
            </Link>
          </EditionSection>
          <EditionSection title="Digital Edition">
            <DigitalEditionDefinitions />
            <a
              href="https://www.patreon.com/tmkeesey/shop/paleocene-1-digital-comic-1430594?source=storefront"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Read It Now</CTA>
            </a>
          </EditionSection>
          <section>
            <Subheading>Translations</Subheading>
            <div className="mt-4 flex items-center justify-center">
              <TextLink
                isExternal
                className="underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                href="https://www.revistadelauniversidad.mx/articles/24d183cd-e3d4-4e63-8e9a-16966fa26726/paleoceno"
                hrefLang="es"
                lang="es"
                title="Spanish"
              >
                Español
              </TextLink>
              {"\u2003•\u2003"}
              <TextLink
                isExternal
                className="underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                href="https://fourcatspress.wordpress.com/paleocene"
                hrefLang="it"
                lang="it"
                title="Italian"
              >
                Italiano
              </TextLink>
              {"\u2003•\u2003"}
              <TextLink
                isExternal
                className="underline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                href="https://www.patreon.com/tmkeesey/shop/palreose-1-paleocene-1-in-korean-digital-1430942?source=storefront"
                hrefLang="ko"
                lang="ko"
                title="Korean"
              >
                한국인
              </TextLink>
            </div>
          </section>
        </EditionsSection>
      </SectionsContainer>
      <TrailerSection
        title="Paleocene #1: Lullaby"
        source="vimeo"
        videoId="456315698"
      >
        Watch the Teaser
      </TrailerSection>
    </>
  )
}
