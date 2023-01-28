import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { Product } from "~/cart/models/Product"
export interface Props {
    product: Product
}
const Thumbnail: FC<Props> = ({ product }) => {
    const href = product.path ?? `/products/${product.id}`
    const imgSrc = product.imagePath ?? `/images/products/${product.id}.png`
    return (
        <Link href={href} legacyBehavior>
            <a>
                <Image src={imgSrc} width={86} height={132} alt={product.name} />
            </a>
        </Link>
    )
}
export default Thumbnail
