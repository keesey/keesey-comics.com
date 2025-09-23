import { AddToCartCTA } from "@/components/AddToCartCTA"
import { TextLink } from "@/components/TextLink"
import { PRODUCTS } from "@/lib/cart/constants/PRODUCTS"
import clsx from "clsx"
import { AppRoute } from "next/dist/build/swc/types"
import Image from "next/image"
import { LinkProps } from "next/link"
import { PropsWithChildren } from "react"
export interface ProductsSectionProps extends PropsWithChildren {
  hideLabels?: true
  types: readonly string[]
}
export const ProductsSection = ({
  children,
  hideLabels,
  types,
}: ProductsSectionProps) => {
  const products = PRODUCTS.filter(product =>
    types.some(type => product.id.startsWith(type)),
  )
  return (
    <section className="inline-flex max-w-[1440px] flex-col items-start">
      {types.map(type => (
        <a key={type} id={type} />
      ))}
      <header className="rounded-t-2xl bg-gray-200 px-6 py-4 text-center dark:bg-black">
        {children}
      </header>
      <ul
        className={clsx(
          "flex flex-row flex-wrap items-stretch justify-center gap-6 rounded-b-2xl bg-gray-200 p-4 dark:bg-black",
          products.length > 1 && "rounded-tr-2xl",
        )}
        style={{ alignSelf: "stretch" }}
      >
        {products.map(product => (
          <li
            key={product.id}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-1 bg-white p-4 text-center shadow-md dark:border-gray-600 dark:bg-gray-700"
          >
            <div className="relative mx-auto h-[185px] w-[119px] overflow-visible transition-transform">
              <Image
                src={
                  product.imagePath ??
                  `/products/${encodeURIComponent(product.id)}.png`
                }
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h3
              dangerouslySetInnerHTML={{ __html: product.html }}
              className={clsx("text-lg", hideLabels ? "hidden" : undefined)}
            />
            <AddToCartCTA
              className="w-[119px]"
              productIds={[product.id]}
              size="md"
            >
              Add to Cart
            </AddToCartCTA>
            <TextLink
              href={
                product.path ??
                (`/products/${encodeURIComponent(product.id)}` as LinkProps<AppRoute>["href"])
              }
            >
              More Info
            </TextLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
