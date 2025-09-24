import { Breadcrumbs } from "@/components/Breadcrumbs"
import { ImageRail } from "@/components/ImageRail"
import { Portrait } from "@/components/Portrait"
import { TextLink } from "@/components/TextLink"
import { TextPassage } from "@/components/TextPassage"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { MIKE_KEESEY } from "./schema"
export const metadata: Metadata = {
  ...generateThingMetadata(MIKE_KEESEY),
  alternates: { canonical: "/creators/mike-keesey" },
  openGraph: { url: "/creators/mike-keesey" },
}
export default function MikeKeesey() {
  return (
    <>
      <Schema thing={MIKE_KEESEY} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Creators", href: "/creators" },
          { label: "Mike Keesey" },
        ]}
      />
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <Portrait
          alt="Mike Keesey (Cartoon Portrait)"
          src="/creators/mike-keesey/portrait.svg"
        />
        <h1 className="text-2xl font-bold">Mike Keesey</h1>
      </div>
      <br />
      <TextPassage>
        <p>
          T. Michael Keesey is a software engineer by trade, but has also worked
          over the years in illustration and evolutionary biology. He has even
          worked as a paleo-technician, digging up Late Jurassic dinosaur
          fossils for the{" "}
          <TextLink href="https://wyomingdinosaurcenter.org/" isExternal>
            Wyoming Dinosaur Center
          </TextLink>
          .
        </p>
        <p>Some of Keesey&rsquo;s other projects include:</p>
        <ul className="ml-4 list-disc">
          <li className="mb-2">
            <strong>
              <TextLink href="https://www.phylopic.org/" isExternal>
                <cite>PhyloPic</cite>
              </TextLink>
            </strong>
            , an open database with thousands of freely reusable silhouettes of
            life forms.
          </li>
          <li className="mb-2">
            <strong>Research papers</strong>:
            <ul style={{ listStyle: "circle" }} className="ml-4">
              <li>
                <TextLink
                  href="https://dx.doi.org/10.1111/j.1420-9101.2004.00870.x"
                  isExternal
                >
                  <span style={{ fontVariant: "small-caps" }}>
                    Hone, Keesey, Pisani &amp; Purvis
                  </span>{" "}
                  <time>2005</time>.
                </TextLink>{" "}
                Macroevolutionary trends in the <i>Dinosauria</i>: Cope&rsquo;s
                rule. <cite>Journal of Evolutionary Biology</cite> 18(
                <strong>3</strong>):587–595.
              </li>
              <li>
                <TextLink
                  href="https://dx.doi.org/10.1111/j.1463-6409.2007.00302.x"
                  isExternal
                  style={{ fontVariant: "small-caps" }}
                >
                  <span style={{ fontVariant: "small-caps" }}>Keesey</span>{" "}
                  <time>2007</time>.
                </TextLink>{" "}
                A mathematical approach to defining clade names, with potential
                applications to computer storage and processing.{" "}
                <cite>Zoologica Scripta</cite> 36(<strong>6</strong>):607–621.
              </li>
              <li>
                <TextLink
                  href="https://dx.doi.org/10.1098/rstb.2020.0496"
                  isExternal
                  style={{ fontVariant: "small-caps" }}
                >
                  <span style={{ fontVariant: "small-caps" }}>
                    Iriarte, Ziegler, Outram, Robinson, Roberts, Aceituno,
                    Morcote-Ríos &amp; Keesey
                  </span>{" "}
                  <time>2022</time>.
                </TextLink>{" "}
                Ice Age megafauna rock art in the Colombian Amazon?{" "}
                <cite>Philosophical Transcations of the Royal Society B</cite>{" "}
                377(<strong>1849</strong>):1–11.
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>
              <cite>Three Histories of the Human Body</cite>
            </strong>
            , a chapter about human evolution in the anti-creationism book{" "}
            <TextLink href="https://www.amazon.com/dp/1629016381" isExternal>
              <cite>
                God&rsquo;s Word or Human Reason?: An Inside Perspective on
                Creationism
              </cite>
            </TextLink>
            .
          </li>
        </ul>
        <p>
          Keesey resides in Los Angeles with his partner, Renie, his child,
          Lucy, and his cat, Scout.
        </p>
      </TextPassage>
      <br />
      <section>
        <h2 className="mx-auto mb-4 text-center text-xl font-bold">
          Mike&rsquo;s comics:
        </h2>
        <ImageRail
          items={[
            {
              alt: "Paleocene #1",
              href: "/comics/paleocene/issues/01",
              imgSrc: "/comics/paleocene/issues/01/front_cover.png",
            },
            {
              alt: "Paleocene #2",
              href: "/comics/paleocene/issues/02",
              imgSrc: "/comics/paleocene/issues/02/front_cover.png",
            },
            {
              alt: "Paleocene #3",
              href: "/comics/paleocene/issues/03",
              imgSrc: "/comics/paleocene/issues/03/front_cover.png",
            },
            {
              alt: "Paleocene #4",
              href: "/comics/paleocene/issues/04",
              imgSrc: "/comics/paleocene/issues/04/front_cover.png",
            },
            {
              alt: "Paleocene #5",
              href: "/comics/paleocene/issues/05",
              imgSrc: "/comics/paleocene/issues/05/front_cover.png",
            },
            {
              alt: "Paleocene #6",
              href: "/comics/paleocene/issues/06",
              imgSrc: "/comics/paleocene/issues/06/front_cover.png",
            },
            {
              alt: "Pleistocene",
              href: "/comics/pleistocene",
              imgSrc: "/comics/pleistocene/front_cover_standard.jpg",
            },
            {
              alt: "Parry ‘n’ Carney",
              href: "/comics/parry-n-carney",
              imgSrc: "/comics/parry-n-carney/front_cover_standard.png",
            },
          ]}
        />
      </section>
    </>
  )
}
