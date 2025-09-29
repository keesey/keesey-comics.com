import { AddToCartCTA } from "@/components/AddToCartCTA"
import { TextLink } from "@/components/TextLink"
import { SeriesRail } from "./SeriesRail"
export const SeriesSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl py-8">
      <h2 className="mb-4 text-center text-xl font-bold">
        Read the whole series:
      </h2>
      <SeriesRail />
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <AddToCartCTA
          productIds={["COB-ST2-FLE-01A", "COB-ST2-FLE-02A", "COB-ST2-FLE-03A"]}
          href="/cart"
        >
          Add All to Cart
        </AddToCartCTA>
        <TextLink href="/contact">Bulk Orders</TextLink>
      </div>
    </section>
  )
}
