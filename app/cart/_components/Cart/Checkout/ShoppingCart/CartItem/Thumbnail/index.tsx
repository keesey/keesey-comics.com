import type { Product } from "@/lib/cart/models/Product"
import Image from "next/image"
import Link from "next/link"
export interface ThumbnailProps {
  product: Product
}
export const Thumbnail = ({ product }: ThumbnailProps) => {
  const href = product.path ?? `/products/${encodeURIComponent(product.id)}`
  const imgSrc =
    product.imagePath ?? `/products/${encodeURIComponent(product.id)}.png`
  return (
    <Link href={href} className="grow-1 place-self-start">
      <Image src={imgSrc} width={86} height={132} alt={product.name} />
    </Link>
  )
}
