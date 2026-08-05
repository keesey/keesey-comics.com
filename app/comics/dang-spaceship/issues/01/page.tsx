import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { ProductDetailsSection } from "@/app/comics/_components/ProductDetailsSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { MIKE_KEESEY } from "@/app/creators/mike-keesey/schema"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTA } from "@/components/CTA"
import { Definition, DefinitionTerm } from "@/components/Definitions"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import { Metadata } from "next"
import {
  WHERE_ARE_MY_DANG_SPACESHIP_KEYS,
  WHERE_ARE_MY_DANG_SPACESHIP_KEYS_ABSTRACT_HTML,
} from "./schema"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(WHERE_ARE_MY_DANG_SPACESHIP_KEYS),
  alternates: { canonical: "/comics/dang-spaceship/issues/01" },
  openGraph: {
    siteName: "Keesey Comics",
    url: "/comics/dang-spaceship/issues/01",
  },
}

export default function WhereAreMyDangSpaceshipKeys() {
  return (
    <>
      <Schema thing={WHERE_ARE_MY_DANG_SPACESHIP_KEYS} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Comics", href: "/comics" },
          { label: <cite>Where Are My Dang Spaceship Keys?</cite> },
        ]}
      />
      <SectionsContainer>
        <CreativeWorkSections
          subject={WHERE_ARE_MY_DANG_SPACESHIP_KEYS}
          abstractHTML={WHERE_ARE_MY_DANG_SPACESHIP_KEYS_ABSTRACT_HTML}
          creator={MIKE_KEESEY}
        >
          <ProductDetailsSection>
            <DefinitionTerm>Pages</DefinitionTerm>
            <Definition>184</Definition>
            {/*
            <DefinitionTerm>Publication Year</DefinitionTerm>
            <Definition>{String(WHERE_ARE_MY_DANG_SPACESHIP_KEYS.copyrightYear)}</Definition>
            */}
            <DefinitionTerm>Artwork</DefinitionTerm>
            <Definition>Black &amp; White (Color Covers)</Definition>
            <DefinitionTerm>Age Rating</DefinitionTerm>
            <Definition>All Ages</Definition>
          </ProductDetailsSection>
        </CreativeWorkSections>
        <PreviewSection
          images={[
            {
              alt: "Where Are My Dang Spaceship Keys?",
              imgSrc: "/comics/dang-spaceship/issues/01/000.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Page 001",
              imgSrc: "/comics/dang-spaceship/issues/01/001.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Page 002",
              imgSrc: "/comics/dang-spaceship/issues/01/002.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Page 003",
              imgSrc: "/comics/dang-spaceship/issues/01/003.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Page 005",
              imgSrc: "/comics/dang-spaceship/issues/01/005.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Pages 006–007",
              imgSrc: "/comics/dang-spaceship/issues/01/006-007.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Pages 054–055",
              imgSrc: "/comics/dang-spaceship/issues/01/054-055.png",
            },
            {
              alt: "Where Are My Dang Spaceship Keys? - Pages 154–155",
              imgSrc: "/comics/dang-spaceship/issues/01/154-155.png",
            },
          ]}
          size="zineSpread"
        />
        <EditionsSection>
          <EditionSection title="Coming in the Future">
            <a
              href="https://www.patreon.com/c/tmkeesey/posts?filters%5Btag%5D=dangspaceship"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Follow Progress</CTA>
            </a>
          </EditionSection>
          <EditionSection title="Get the latest updates!">
            <a href="/newsletter">
              <CTA>Subscribe Now</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
    </>
  )
}
