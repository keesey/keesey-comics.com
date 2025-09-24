import { SeriesRail } from "@/app/comics/the-flesh/_components/SeriesRail"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Portrait } from "@/components/Portrait"
import { TextPassage } from "@/components/TextPassage"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { GAGE_ULLMAN } from "./schema"
import { TextLink } from "@/components/TextLink"

export const metadata: Metadata = {
  ...generateThingMetadata(GAGE_ULLMAN),
  alternates: { canonical: "/creators/gage-ullman" },
  openGraph: { url: "/creators/gage-ullman" },
}
export default function GageUllman() {
  return (
    <>
      <Schema thing={GAGE_ULLMAN} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Creators", href: "/creators" },
          { label: "Gage Ullman" },
        ]}
      />
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Portrait
          alt="Gage Ullman (Cartoon Portrait)"
          src="/creators/gage-ullman/portrait.svg"
        />
        <h1 className="text-2xl font-bold">Gage Ullman</h1>
      </div>
      <br />
      <TextPassage>
        <p>
          Gage Ullman is a motion designer. His reel can be seen at{" "}
          <TextLink href="https://gageullmangraphics.com/">
            Gage Ullman Graphics
          </TextLink>
          .
        </p>
        <p>Ullman resides in Los Angeles.</p>
      </TextPassage>
      <br />
      <section>
        <h2 className="mx-auto mb-4 text-center text-xl font-bold">
          Gage&rsquo;s comics:
        </h2>
        <SeriesRail />
      </section>
    </>
  )
}
