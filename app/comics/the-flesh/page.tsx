import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Abstract } from "@/components/CreativeWorkHeader"
import { LogoHeader } from "@/components/LogoHeader"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { THE_FLESH } from "./schema"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(THE_FLESH),
  alternates: { canonical: "/comics/the-flesh" },
}
export default function TheFlesh() {
  return (
    <>
      <Schema thing={THE_FLESH} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Comics", href: "/comics" },
          { label: <cite>The Flesh</cite> },
        ]}
      />
      <LogoHeader
        alt="The Flesh by Gage Ullman"
        aspectRatio={438.5 / 292.7}
        src="/logos/color/the-flesh.svg"
        className="bg-[#220022] dark:bg-black"
      />
      <br />
      <Abstract>{String(THE_FLESH.abstract)}</Abstract>
    </>
  )
}
