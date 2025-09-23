import { Breadcrumbs } from "@/components/Breadcrumbs"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PALEOCENE } from "./paleocene/schema"
import { PARRY_N_CARNEY_ABSTRACT_HTML } from "./parry-n-carney/schema"
import { PLEISTOCENE_ABSTRACT_HTML } from "./pleistocene/schema"
import { THE_FLESH } from "./the-flesh/schema"
import { TextPassage } from "@/components/TextPassage"
import { LogoHeader } from "@/components/LogoHeader"

export const metadata: Metadata = {
  title: "Keesey Comics: All Comics",
}
export default function Comics() {
  return (
    <>
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Comics" }]}
      />
      <div className="flex flex-col gap-8">
        <LogoHeader
          alt="Keesey Comics"
          aspectRatio={474.7 / 285.7}
          bg={
            <div className="inset-shadow-xl/50 absolute top-0 right-0 bottom-0 left-0">
              <Image
                alt=""
                src="/comics/bg.png"
                fill
                className="object-cover"
                priority
              />
            </div>
          }
          className="bg-[#330000]"
          src="/logos/color/keesey-comics.svg"
        />
        <section>
          <TextPassage>
            <p>
              Disaster, cataclysm, extinction … and new beginnings. Keesey
              Comics is proud to present independent, creator-driven comics that
              explore our prehistoric origins, the fragility of our future, and
              the power of friendship and family. Join us on tumultuous journeys
              of epic devastation and persistence against all odds. Also
              there&rsquo;s a silly comic about dinosaur friends.
            </p>
          </TextPassage>
        </section>
        <section className="px-4">
          <div className="flex flex-col gap-6">
            <Link className="group cursor-pointer" href="/comics/paleocene">
              <div className="mx-auto flex w-full max-w-5xl flex-row items-center gap-8">
                <div className="relative h-[185px] w-[119px] overflow-visible bg-gray-500 shadow-md transition-transform group-hover:scale-105 md:h-[278px] md:w-[179px] lg:h-[370px] lg:w-[238px]">
                  <Image
                    src="/comics/paleocene/issues/06/front_cover.png"
                    alt="Paleocene"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h2 className="text-xl font-bold">
                    <cite>Paleocene</cite>
                  </h2>
                  <p className="max-w-2xl text-left md:text-justify">
                    {String(PALEOCENE.abstract)}
                  </p>
                </div>
              </div>
            </Link>
            <Link className="group cursor-pointer" href="/comics/the-flesh">
              <div className="mx-auto flex w-full max-w-5xl flex-row items-center justify-end gap-8">
                <div className="relative order-1 h-[185px] w-[119px] overflow-visible bg-gray-500 shadow-md transition-transform group-hover:scale-105 md:h-[278px] md:w-[179px] lg:h-[370px] lg:w-[238px]">
                  <Image
                    src="/comics/the-flesh/issues/02/front_cover.png"
                    alt="The Flesh"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-end gap-4">
                  <h2 className="text-xl font-bold">
                    <cite>The Flesh</cite>
                  </h2>
                  <p className="max-w-2xl text-left md:text-justify">
                    {String(THE_FLESH.abstract)}
                  </p>
                </div>
              </div>
            </Link>
            <Link
              className="group cursor-pointer"
              href="/comics/parry-n-carney"
            >
              <div className="mx-auto flex w-full max-w-5xl flex-row items-center gap-8">
                <div className="relative h-[185px] w-[119px] overflow-visible bg-gray-500 shadow-md transition-transform group-hover:scale-105 md:h-[278px] md:w-[179px] lg:h-[370px] lg:w-[238px]">
                  <Image
                    src="/comics/parry-n-carney/front_cover_standard.png"
                    alt="Parry ‘n’ Carney: Friends for Life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4">
                  <h2 className="text-xl font-bold">
                    <cite>Parry ‘n’ Carney: Friends for Life</cite>
                  </h2>
                  <p
                    className="max-w-2xl text-left md:text-justify"
                    dangerouslySetInnerHTML={{
                      __html: PARRY_N_CARNEY_ABSTRACT_HTML,
                    }}
                  />
                  <p className="max-w-2xl text-left md:text-justify">
                    The old website may be gone, but Parry and Carney’s
                    friendship lives on! Not even an asteroid could stop these
                    dinosaur buds. Presented here for the first time since the
                    site went kaput are all 70{" "}
                    <cite>Parry ‘n’ Carney: Friends for Life</cite> comic
                    strips. Some of them are even <strong>not</strong>{" "}
                    completely blurry!
                  </p>
                </div>
              </div>
            </Link>
            <Link className="group cursor-pointer" href="/comics/pleistocene">
              <div className="mx-auto flex w-full max-w-5xl flex-row items-center justify-end gap-8">
                <div className="relative order-1 h-[185px] w-[119px] overflow-visible bg-gray-500 shadow-md transition-transform group-hover:scale-105 md:h-[278px] md:w-[179px] lg:h-[370px] lg:w-[238px]">
                  <Image
                    src="/comics/pleistocene/front_cover_standard.jpg"
                    alt="Pleistocene"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col items-end gap-4">
                  <h2 className="text-xl font-bold">
                    <cite>Pleistocene</cite>
                  </h2>
                  <p
                    className="max-w-2xl text-left md:text-justify"
                    dangerouslySetInnerHTML={{
                      __html: PLEISTOCENE_ABSTRACT_HTML,
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
