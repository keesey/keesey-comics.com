import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTA } from "@/components/CTA"
import {
  Definition,
  Definitions,
  DefinitionTerm,
} from "@/components/Definitions"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import { PLEISTOCENE, PLEISTOCENE_ABSTRACT_HTML } from "./schema"
import { TextPassage } from "@/components/TextPassage"
import { MIKE_KEESEY } from "@/app/creators/mike-keesey/schema"
import { Price } from "@/components/Price"
import { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PLEISTOCENE),
  alternates: { canonical: "/comics/pleistocene" },
  openGraph: { url: "/comics/pleistocene" },
}
export default function Pleistocene() {
  return (
    <>
      <Schema thing={PLEISTOCENE} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Comics", href: "/comics" },
          { label: <cite>Pleistocene</cite> },
        ]}
      />
      <SectionsContainer>
        <CreativeWorkSections
          subject={PLEISTOCENE}
          abstractHTML={PLEISTOCENE_ABSTRACT_HTML}
          creator={MIKE_KEESEY}
        >
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>12 interior + 4 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(PLEISTOCENE.copyrightYear)}</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Black &amp; White (Color Covers)</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>17+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Pleistocene - Front Cover",
              imgSrc: "/comics/pleistocene/front_cover.jpg",
            },
            {
              alt: "Pleistocene - Page 1",
              imgSrc: "/comics/pleistocene/01.png",
            },
            {
              alt: "Pleistocene - Page 2",
              imgSrc: "/comics/pleistocene/02.png",
            },
            {
              alt: "Pleistocene - Page 5",
              imgSrc: "/comics/pleistocene/05.png",
            },
          ]}
          size="mini"
        />
        <EditionsSection>
          <EditionSection title="Print Edition">
            <Definitions>
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={7.99} />
              </Definition>
              <DefinitionTerm>Dimensions</DefinitionTerm>
              <Definition>
                5{"\u200A"}
                <span style={{ fontVariantNumeric: "diagonal-fractions" }}>
                  3/16
                </span>
                <abbr title="inches">″</abbr>
                {"\u200A×\u200A"}7{"\u200A"}
                <span style={{ fontVariantNumeric: "diagonal-fractions" }}>
                  1/4
                </span>
                <abbr title="inches">″</abbr>
              </Definition>
              <DefinitionTerm>Paper Weight</DefinitionTerm>
              <Definition>
                60# Uncoated (Interior), 80# Gloss (Covers)
              </Definition>
              <DefinitionTerm>Binding</DefinitionTerm>
              <Definition>Saddle Stitch</Definition>
            </Definitions>
            <span className="text-xl font-bold uppercase">Sold Out</span>
          </EditionSection>
          <EditionSection title="Digital Edition">
            <Definitions className="flex-grow-1">
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={4} /> (<Price amount={6} /> on iOS)
              </Definition>
              <DefinitionTerm>File Format</DefinitionTerm>
              <Definition>PDF</Definition>
            </Definitions>
            <a
              href="https://www.patreon.com/tmkeesey/shop/pleistocene-digital-mini-comic-1430967?source=storefront"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Read It Now</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
      <TextPassage>
        <p>
          Our ancestors were little more than walking apes when the Pleistocene
          began, nearly 2.6 million years ago. Those proto-humans, called
          “habilines”, were limited to a single continent—Africa—and created
          only the crudest of stone tools. When the Pleistocene ended, less than
          12 thousand years ago, fully modern humans had established complex
          societies across every continent but Antarctica. Often we think of
          this transition as a linear “March of Progress”, where the “walking
          apes” steadily became more and more human. But our true family history
          is no simple procession from there to here—it is great tangle of
          twisting branches.
        </p>
        <p>
          The “habilines” had brains barely larger than those of chimpanzees.
          Some of their descendants did not change much in this regard—the
          “hobbits” of Indonesia (<i>Homo floresiensis</i>) and the “Star Men”
          of southern Africa (<i>Homo naledi</i>). But other descendants, the
          “erectines”, developed larger brains. Their greater intellect is
          reflected in their more sophisticated stone tools. And about a million
          years ago, they gave rise to people with even larger brains: the
          “archaics”.
        </p>
        <p>
          “Archaics” spread out across the Old World, rapidly splitting into
          several major groups. In West Eurasia lived the Neandertals (
          <i>Homo neanderthalensis</i>), the “cave men” of popular culture. In
          East Asia we find scant remains of a mysterious group: the Denisovans.
          And in Africa, during the Middle Pleistocene, a new species arose.
          Compared to the others, they had soft, graceful, child-like features.
          They were us: <i>Homo sapiens</i>.
        </p>
        <p>
          By the end of the Pleistocene, <i>Homo sapiens</i> was the only
          species left. The small-brained relicts, “hobbits” and “Star Men”,
          died out as we rose to dominance. But the large-brained “archaics” did
          not entirely vanish. Although everyone today owes over 90% of their
          ancestry to the early <i>Homo sapiens</i> of Africa, a small
          percentage comes from the “archaics”: Neandertals, Denisovans, and
          various African lineages. The remnants of a more diverse era are
          written into our DNA.
        </p>
        <p>
          After parting ways nearly a million years ago, modern humans and
          “archaics” found each other again in the Late Pleistocene. Were these
          first meetings violent? Peaceful? Both? We can only wonder.
        </p>
      </TextPassage>
    </>
  )
}
