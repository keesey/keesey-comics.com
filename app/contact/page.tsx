import { Breadcrumbs } from "@/components/Breadcrumbs"
import { TextLink } from "@/components/TextLink"
import { PRODUCT_TYPES } from "@/lib/cart/constants/PRODUCT_TYPES"
import { PRODUCTS } from "@/lib/cart/constants/PRODUCTS"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { AppRoute } from "next/dist/build/swc/types"
import { LinkProps } from "next/link"

import { CONTACT } from "./schema"
export const metadata: Metadata = {
  ...generateThingMetadata(CONTACT),
  alternates: { canonical: "/contact" },
  openGraph: { siteName: "Keesey Comics", url: "/contact" },
}
export default function Contact() {
  return (
    <>
      <Schema thing={CONTACT} />
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <header className="px-4 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-lg text-justify">
          For all inquiries, including bulk orders and issues with shipments,
          please contact Mike Keesey at:
        </p>
      </header>
      <TextLink
        className="mx-auto mt-4 block text-center text-xl font-black"
        href="mailto:keesey+comics@gmail.com"
      >
        keesey+comics@gmail.com
      </TextLink>
      <section className="mx-auto mt-12 max-w-4xl px-4">
        <h2 className="mb-4 text-center text-xl font-bold">
          Items Available for Bulk Order
        </h2>
        <ul className="flex flex-col flex-wrap items-baseline justify-center gap-8 pl-8 md:flex-row md:pl-0">
          {PRODUCT_TYPES.map(type => (
            <li key={type.id}>
              <h3 className="font-bold md:max-w-[14em]">{type.name}</h3>
              <ul className="list-disc text-left">
                {PRODUCTS.filter(product => product.type === type).map(
                  product => (
                    <li key={product.id}>
                      <TextLink
                        href={
                          `/products/${encodeURIComponent(product.id)}` as LinkProps<AppRoute>["href"]
                        }
                        dangerouslySetInnerHTML={{ __html: product.html }}
                      />
                    </li>
                  ),
                )}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
