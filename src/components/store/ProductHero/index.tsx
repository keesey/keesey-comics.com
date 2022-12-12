import Image from "next/image"
import { FC, useMemo } from "react"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import Hero from "~/components/heroes/Hero"
import Price from "~/components/Price"
import IncrementQuantityCTA from "../IncrementQuantityCTA"
export interface Props {
    productId: string
}
const ProductHero: FC<Props> = ({ productId }) => {
    const product = PRODUCTS_MAP[productId]
    const productIds = useMemo(() => [productId], [productId])
    return (
        <>
            <Hero>
                <h1
                    dangerouslySetInnerHTML={{
                        __html: product.html,
                    }}
                />
                <h2>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: product.type.html,
                        }}
                    />
                </h2>
                {/* :TODO: Add description? */}
                <h2>
                    <Price amount={product.type.value} abbreviate />
                </h2>
                <IncrementQuantityCTA productIds={productIds}>Add to Cart</IncrementQuantityCTA>
                <br />
                <Image
                    alt={product.name}
                    src={`/images/products/${productId}.png`}
                    layout="intrinsic"
                    width={688}
                    height={1050}
                />
            </Hero>
        </>
    )
}
export default ProductHero
