import { Breadcrumbs } from "@/components/Breadcrumbs"
import { TextLink } from "@/components/TextLink"
import { generateThingMetadata } from "@/lib/schema/generateThingMetadata"
import { Schema } from "@/lib/schema/Schema"
import type { Metadata } from "next"
import { METADATA_BASE } from "../_lib/METADATA_BASE"
import { NEWSLETTER } from "./schema"
export const metadata: Metadata = {
  ...generateThingMetadata(NEWSLETTER),
  alternates: { canonical: "/newsletter" },
  metadataBase: METADATA_BASE,
}
export default function Newsletter() {
  return (
    <>
      <Schema thing={NEWSLETTER} />
      <Breadcrumbs
        crumbs={[{ label: "Home", href: "/" }, { label: "Newsletter" }]}
      />
      <header className="px-4 text-center">
        <h1 className="text-3xl font-bold">Keesey Comics Newsletter</h1>
        <p className="mx-auto mt-4 max-w-lg text-justify">
          The <em>Keesey Comics Newsletter</em> is an infrequent email bulletin
          that will keep you updated on the latest news and events from Keesey
          Comics. Typically only a few emails are sent per year.
        </p>
      </header>
      <form
        action="//paleocene-comic.us17.list-manage.com/subscribe/post?u=e566f9716747a52421a7b5ac7&amp;id=e318ef44fc"
        className="mt-8 text-center"
        id="mc-embedded-subscribe-form"
        method="post"
        name="mc-embedded-subscribe-form"
        noValidate
        target="_blank"
      >
        <div
          className="flex flex-row items-center justify-center gap-2"
          id="mc_embed_signup_scroll"
        >
          <input
            className="w-sm rounded-2xl border-2 bg-white p-2 placeholder-gray-400 dark:text-black"
            aria-label="email address"
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="email address"
            required
            type="email"
          />
          <input
            aria-hidden
            className="hidden"
            name="b_e566f9716747a52421a7b5ac7_e318ef44fc"
            tabIndex={-1}
            type="text"
          />
          <input
            autoFocus
            className="p8 w-48 cursor-pointer rounded-2xl bg-blue-900 py-2 text-center text-xl font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-black"
            id="mc-embedded-subscribe"
            name="subscribe"
            type="submit"
            value="Subscribe"
            role="button"
          />
        </div>
      </form>
      <p className="mt-8 text-center text-lg font-medium">
        <TextLink
          href="https://us17.campaign-archive.com/home/?u=e566f9716747a52421a7b5ac7&id=e318ef44fc"
          isExternal
        >
          See Past Posts
        </TextLink>
      </p>
    </>
  )
}
