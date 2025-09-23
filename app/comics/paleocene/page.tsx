import { METADATA_BASE } from "@/app/_lib/METADATA_BASE"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { LogoHeader } from "@/components/LogoHeader"
import { TextPassage } from "@/components/TextPassage"
import { generateCreativeWorkMetadata } from "@/lib/schema/generateCreativeWorkMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import Image from "next/image"
import { PALEOCENE } from "./schema"
export const metadata: Metadata = {
  ...generateCreativeWorkMetadata(PALEOCENE),
  alternates: { canonical: "/comics/paleocene" },
  metadataBase: METADATA_BASE,
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
      <LogoHeader
        alt="Paleocene by Mike Keesey"
        bg={
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <Image
              alt=""
              src="/comics/paleocene/bg.png"
              fill
              className="object-cover opacity-50 blur-xs"
              priority
            />
          </div>
        }
        aspectRatio={545.8 / 228.8}
        src="/logos/color/paleocene.svg"
        className="bg-[#362d3b]"
      />
      <br />
      <TextPassage>
        <p>
          <strong>Sixty-six million years ago, the world ended.</strong>
        </p>
        <p>
          An asteroid over ten kilometers in diameter—wider than Mount Everest
          is tall—slammed into the Yucatán Peninsula. The impact unleashed two
          million times as much energy as the largest nuclear bomb ever
          detonated. A megatsunami a hundred meters tall crashed into the
          northern coastline of the Gulf of Mexico. Well over four thousand
          cubic kilometers of matter melted or vaporized in less than a second,
          leaving a crater thirty kilometers deep, briefly, before it began to
          fill. All life in the region was obliterated in the blink of an eye.
        </p>
        <p>
          For the rest of the world, death was slower—at least where there were
          no firestorms nor ejecta re-entering the atmosphere. A shroud of soot
          and dust engulfed the Earth, blotting out the Sun. In the seas,
          coccolithophorid algae were unable to photosynthesize. Their massive
          die-off had a domino effect up the food chain, completely wiping out
          inoceramid and rudist clams, ammonoid and belemnoid mollusks, and the
          great marine reptiles: mosasaurs and plesiosaurs. On land, most plant
          life withered and died, leading to the extinction of winged pterosaurs
          and, most famously, non-avian dinosaurs. Three quarters of all life on
          Earth perished.
        </p>
        <p>
          <strong>But we survived.</strong>
        </p>
        <p>
          Not “we” as in humankind. This was long before anything resembling{" "}
          <i>Homo sapiens</i>. But our proto-primate ancestors, forebears that
          we share with all apes, monkeys, tarsiers, lemurs, lorises, and
          bushbabies—they survived. With clutched hands and shining eyes, they
          witnessed the end of the world … and the early dawn of a new one.
        </p>
      </TextPassage>
    </>
  )
}
