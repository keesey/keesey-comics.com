import { Breadcrumbs } from "@/components/Breadcrumbs"
import {
  Definition,
  Definitions,
  DefinitionTerm,
} from "@/components/Definitions"
import { Price } from "@/components/Price"
import { TextLink } from "@/components/TextLink"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"

import { ProductsSection } from "./_components/ProductsSection"
import { STORE } from "./schema"
export const metadata: Metadata = {
  ...generateThingMetadata(STORE),
  alternates: { canonical: "/products" },
  openGraph: { url: "/products" },
}
/* eslint-disable @next/next/no-img-element */
export default function Products() {
  return (
    <>
      <Schema thing={STORE} />
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Store" }]}
      />
      <div className="flex flex-col items-stretch justify-stretch gap-8 px-4">
        <header className="text-center">
          <h1 className="mx-auto mb-6 text-3xl font-bold">
            Keesey Comics Online Store
          </h1>
          <p className="mb-4 text-xl">
            <TextLink href="/patreon/shop" isExternal>
              Digital editions
            </TextLink>{" "}
            available on{" "}
            <a
              href="/patreon/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="group ml-2 cursor-pointer"
            >
              <img
                alt="Patreon"
                src="/logos/black/patreon.svg"
                width={120.74}
                height={20}
                className="inline transition-transform group-hover:scale-110 dark:hidden"
              />
              <img
                alt="Patreon"
                src="/logos/white/patreon.svg"
                width={120.74}
                height={20}
                className="hidden transition-transform group-hover:scale-110 dark:inline"
              />
            </a>
          </p>
          <p className="text-xl">
            <TextLink href="/contact">Contact us</TextLink> for bulk orders.
          </p>
        </header>
        <div className="mx-auto flex max-w-[1440px] flex-row flex-wrap items-stretch justify-center gap-6">
          <ProductsSection types={["COB-STD", "COB-ST2"]}>
            <h2 className="text-2xl font-bold">Comic Books</h2>
            <Definitions>
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={7.99} />–<Price amount={9.99} />
              </Definition>
              <DefinitionTerm>Dimensions</DefinitionTerm>
              <Definition>
                6{"\u200A"}
                <span style={{ fontVariantNumeric: "diagonal-fractions" }}>
                  7/8
                </span>
                <abbr title="inches">″</abbr>
                {"\u200A×\u200A"}10{"\u200A"}
                <span style={{ fontVariantNumeric: "diagonal-fractions" }}>
                  1/4
                </span>
                <abbr title="inches">″</abbr>
              </Definition>
              <DefinitionTerm>Binding</DefinitionTerm>
              <Definition>Saddle Stitch</Definition>
            </Definitions>
          </ProductsSection>
          <ProductsSection types={["POS-17I"]} hideLabels>
            <h2 className="text-2xl font-bold">Posters</h2>
            <Definitions>
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={14.99} />
              </Definition>
              <DefinitionTerm>Dimensions</DefinitionTerm>
              <Definition>
                11
                <abbr title="inches">″</abbr>
                {"\u200A×\u200A"}17
                <abbr title="inches">″</abbr>
              </Definition>
            </Definitions>
          </ProductsSection>
          <ProductsSection types={["BKM-06I"]} hideLabels>
            <h2 className="text-2xl font-bold">Bookmarks</h2>
            <Definitions>
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={0.99} />
              </Definition>
              <DefinitionTerm>Dimensions</DefinitionTerm>
              <Definition>
                2<abbr title="inches">″</abbr>
                {"\u200A×\u200A"}6<abbr title="inches">″</abbr>
              </Definition>
            </Definitions>
          </ProductsSection>
          <ProductsSection types={["STK-02I"]} hideLabels>
            <h2 className="text-2xl font-bold">Stickers</h2>
            <Definitions>
              <DefinitionTerm>Unit Price</DefinitionTerm>
              <Definition>
                <Price amount={0.99} />
              </Definition>
              <DefinitionTerm>Dimensions</DefinitionTerm>
              <Definition>
                2<abbr title="inches">″</abbr>
                {"\u200A×\u200A"}2<abbr title="inches">″</abbr>
              </Definition>
            </Definitions>
          </ProductsSection>
        </div>
      </div>
    </>
  )
}
