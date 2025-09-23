import { CreativeWorkSections } from "@/app/comics/_components/CreativeWorkSections"
import { EditionSection } from "@/app/comics/_components/EditionSection"
import { EditionsSection } from "@/app/comics/_components/EditionsSection"
import { PreviewSection } from "@/app/comics/_components/PreviewSection"
import { SectionsContainer } from "@/app/comics/_components/SectionsContainer"
import { createCrumbsForIssue } from "@/app/comics/_lib/createCrumbsForIssue"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTA } from "@/components/CTA"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import { PALEOCENE_06 } from "./schema"
import { MIKE_KEESEY } from "@/app/creators/mike-keesey/schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE_06),
  alternates: { canonical: "/comics/paleocene/issues/06" },
}
export default function Paleocene06() {
  return (
    <>
      <Schema thing={PALEOCENE_06} />
      <Breadcrumbs
        crumbs={createCrumbsForIssue("Paleocene", "/comics/paleocene", 6)}
      />
      <SectionsContainer>
        <CreativeWorkSections subject={PALEOCENE_06} creator={MIKE_KEESEY} />
        <PreviewSection
          images={[
            {
              alt: "Paleocene #6 - Front Cover",
              imgSrc: "/comics/paleocene/issues/06/front_cover.png",
            },
          ]}
        />
        <EditionsSection>
          <EditionSection title="Coming in 2026!">
            <a
              href="https://www.patreon.com/c/tmkeesey/posts?filters%5Btag%5D=paleocene6"
              rel="noopener roreferrer"
              target="_blank"
            >
              <CTA>Follow Progress</CTA>
            </a>
          </EditionSection>
        </EditionsSection>
      </SectionsContainer>
    </>
  )
}
