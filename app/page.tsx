import { Carousel } from "@/components/Carousel"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { FeaturedPublications } from "./_components/FeaturedPublications"
import { KEESEY_COMICS } from "./schema"

export const metadata: Metadata = {
  ...generateThingMetadata(KEESEY_COMICS),
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
}
export default function Home() {
  return (
    <>
      <Schema thing={KEESEY_COMICS} />
      <Carousel
        slides={[
          {
            alt: "Now on sale! PALEOCENE #5. Read the latest issue.",
            bgImgSrc: "/carousel/paleocene05_onsale/bg.png",
            href: "/comics/paleocene/issues/05",
            id: "paleocene05_onsale",
            imgSrc: "/carousel/paleocene05_onsale/fg.png",
          },
          {
            alt: "Sneak peek! PALEOCENE #6. Follow progress on the final issue!",
            bgImgSrc: "/carousel/paleocene06_cover/bg.png",
            href: "https://www.patreon.com/c/tmkeesey/posts?filters%5Btag%5D=paleocene6",
            id: "paleocene06_cover",
            imgSrc: "/carousel/paleocene06_cover/fg.png",
            isExternal: true,
          },
          {
            alt: "The boys are back! PARRY 'N' CARNEY: FRIENDS FOR LIFE. Every strip from this old webcomic you never heard of!",
            bgImgSrc: "/carousel/parry-n-carney/bg.svg",
            href: "/comics/parry-n-carney",
            id: "parry-n-carney",
            imgSrc: "/carousel/parry-n-carney/fg.png",
          },
        ]}
      />
      <FeaturedPublications />
    </>
  )
}
