import { AddToCartCTA } from "@/components/AddToCartCTA"
import { ImageRail, ImageRailItem } from "@/components/ImageRail"
import { TextLink } from "@/components/TextLink"
import { createIssueRailItem } from "../../_lib/createIssueRailItem"
const NUM_ISSUES = 6
const ITEMS: readonly ImageRailItem[] = new Array(NUM_ISSUES)
  .fill(null)
  .map((_, index) => createIssueRailItem("Paleocene", "paleocene", index + 1))
export const SeriesSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl py-8">
      <h2 className="mb-4 text-center text-xl font-bold">
        Read the whole series:
      </h2>
      <ImageRail items={ITEMS} />
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <AddToCartCTA
          href="/cart"
          productIds={[
            "COB-STD-PAL-01B",
            "COB-STD-PAL-02A",
            "COB-STD-PAL-03A",
            "COB-STD-PAL-04A",
            "COB-STD-PAL-05A",
          ]}
        >
          Add All to Cart
        </AddToCartCTA>
        <div className="flex flex-row gap-8">
          <TextLink href="/contact">Bulk Orders</TextLink>
          <TextLink href="/patreon/shop" isExternal>
            Digital Editions
          </TextLink>
        </div>
      </div>
    </section>
  )
}
