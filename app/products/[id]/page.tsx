import { Breadcrumbs } from "@/components/Breadcrumbs"
import { CTA } from "@/components/CTA"
import { CheckOutCTA } from "@/components/CheckOutCTA"
import { IncrementQuantityCTA } from "@/components/IncrementQuantityCTA"
import { PRODUCTS, PRODUCTS_MAP } from "@/lib/cart/constants/PRODUCTS"
import { Schema } from "@/lib/schema/Schema"
import Image from "next/image"
import Link from "next/link"
import { notFound, permanentRedirect } from "next/navigation"
import { getProductSchema } from "./_lib/getProductSchema"
import { Definitions } from "@/components/Definitions"
import { Metadata } from "next"

export interface Props {
  productId: string
}
export const dynamicParams = false
export const generateStaticParams = (): Array<
  Awaited<PageProps<"/products/[id]">["params"]>
> => {
  return PRODUCTS.filter(product => !product.path).map(({ id }) => ({ id }))
}
export const generateMetadata = async ({
  params,
}: PageProps<"/products/[id]">): Promise<Metadata> => {
  const { id: productId } = await params
  const product = PRODUCTS_MAP[productId]
  if (!product) {
    notFound()
  }
  return {
    alternates: { canonical: `/products/${encodeURIComponent(productId)}` },
    title: `${product.name} (${product.type.name})`,
  }
}
const Product = async ({ params }: PageProps<"/products/[id]">) => {
  const { id: productId } = await params
  const product = PRODUCTS_MAP[productId]
  if (!product) {
    const productIdUpperCase = productId.toUpperCase()
    const productUpperCase = PRODUCTS_MAP[productIdUpperCase]
    if (productUpperCase) {
      if (typeof productUpperCase.path === "string") {
        permanentRedirect(productUpperCase.path)
      }
      permanentRedirect(
        `/products/${encodeURIComponent(productId.toUpperCase())}`,
      )
    }
    notFound()
  }
  if (typeof product.path === "string") {
    permanentRedirect(product.path)
  }
  const productSchema = getProductSchema(product)
  return (
    <>
      <Schema thing={productSchema} />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Store", href: "/products" },
          {
            label: <span dangerouslySetInnerHTML={{ __html: product.html }} />,
          },
        ]}
      />
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <section className="flex flex-col items-center justify-center gap-4 text-center">
          <h1
            className="px-2 text-3xl font-bold"
            dangerouslySetInnerHTML={{
              __html: product.html,
            }}
          />
          <Definitions>{product.type.details}</Definitions>
          <IncrementQuantityCTA productIds={[productId]}>
            Add to Cart
          </IncrementQuantityCTA>
          <div
            className="flex max-h-screen w-screen items-center justify-center bg-gray-400 py-8 dark:bg-black"
            style={{ alignSelf: "stretch" }}
          >
            <Image
              alt={product.name}
              src={`/products/${productId}.png`}
              width={344}
              height={525}
              className="max-h-screen max-w-screen object-contain"
              priority
            />
          </div>
        </section>
        <div className="flex gap-4 px-2">
          <Link href="/store">
            <CTA>More Products</CTA>
          </Link>
          <CheckOutCTA level={2} />
        </div>
      </div>
    </>
  )
}
export default Product
