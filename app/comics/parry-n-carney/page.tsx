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
import { PARRY_N_CARNEY, PARRY_N_CARNEY_ABSTRACT_HTML } from "./schema"
import { TextPassage } from "@/components/TextPassage"
import { MIKE_KEESEY } from "@/app/creators/mike-keesey/schema"
import { Price } from "@/components/Price"

import { Metadata } from "next"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PARRY_N_CARNEY),
  alternates: { canonical: "/comics/parry-n-carney" },
  openGraph: { url: "/comics/parry-n-carney" },
}
export default function ParryNCarney() {
  return (
    <>
      <Schema thing={PARRY_N_CARNEY} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Comics", href: "/comics" },
          { label: <cite>Parry ‘n’ Carney: Friends for Life</cite> },
        ]}
      />
      <SectionsContainer>
        <CreativeWorkSections
          subject={PARRY_N_CARNEY}
          abstractHTML={PARRY_N_CARNEY_ABSTRACT_HTML}
          creator={MIKE_KEESEY}
        >
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>48 interior + 2 cover</Definition>
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>2023 (strips from 2005–2007)</Definition>
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Black &amp; White (Color Covers)</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>17+</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Parry ‘n’ Carney: Friends for Life - Front Cover",
              imgSrc: "/comics/parry-n-carney/front_cover.png",
            },
            {
              alt: "Parry ‘n’ Carney: Friends for Life -Sample Strips",
              imgSrc: "/comics/parry-n-carney/sample.png",
            },
          ]}
          size="booklet"
        />
        <EditionsSection>
          <EditionSection title="Digital Edition">
            <Definitions className="flex-grow-1">
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={4} abbreviate /> (<Price amount={6} abbreviate />{" "}
                on iOS)
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
      <section>
        <TextPassage>
          <p>
            Remember this old web comic? From ages ago? Like, before
            smartphones? No? Well, it’s back, anyway!
          </p>
          <p>
            The old website may be gone, but Parry and Carney’s friendship lives
            on! Not even an asteroid could stop these dinosaur buds. Presented
            here for the first time since the site went kaput are all 70{" "}
            <cite>Parry ‘n’ Carney: Friends for Life</cite> comic strips. Some
            of them are even <strong>not</strong> completely blurry!
          </p>
          <p>
            Whether you’re a fan from back in the day (one of the ten or so) or
            a newcomer, you’ll love following the exploits of these classic
            comic characters! Or whatever.
          </p>
          <p>
            <em>
              Featuring an all-new foreword by Charles Darwin. Yes,{" "}
              <strong>that</strong> Charles Darwin!
            </em>
          </p>
        </TextPassage>
      </section>
    </>
  )
}
