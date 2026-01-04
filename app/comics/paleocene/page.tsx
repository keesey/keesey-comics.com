import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Carousel } from "@/components/Carousel"
import { TextPassage } from "@/components/TextPassage"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { PALEOCENE } from "./schema"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE),
  alternates: { canonical: "/comics/paleocene" },
  openGraph: { siteName: "Keesey Comics", url: "/comics/paleocene" },
}
export default function Paleocene() {
  return (
    <>
      <Schema thing={PALEOCENE} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Comics", href: "/comics" },
          { label: <cite>Paleocene</cite> },
        ]}
      />
      <Carousel
        slides={[
          {
            alt: "Sneak peek! PALEOCENE #6. Follow progress on the final issue!",
            bgImgSrc: "/carousel/paleocene06_cover/bg.png",
            href: "https://www.patreon.com/c/tmkeesey/posts?filters%5Btag%5D=paleocene6",
            id: "paleocene06_cover",
            imgSrc: "/carousel/paleocene06_cover/fg.png",
            isExternal: true,
          },
          {
            alt: "Now on sale! PALEOCENE #5. Read the latest issue.",
            bgImgSrc: "/carousel/paleocene05_onsale/bg.png",
            href: "/comics/paleocene/issues/05",
            id: "paleocene05_onsale",
            imgSrc: "/carousel/paleocene05_onsale/fg.png",
          },
        ]}
      />
      <br />
      <TextPassage>
        <p>{String(PALEOCENE.abstract)}</p>
      </TextPassage>
    </>
  )
}
