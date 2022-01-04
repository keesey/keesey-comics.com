import Image from "next/image"
import { VFC } from "react"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import Hero from "~/components/heroes/Hero"
import Price from "~/components/Price"
import IncrementQuantityCTA from "../IncrementQuantityCTA"
export interface Props {
    productId: string;
}
const ProductHero: VFC<Props> = ({ productId }) => {
    const product = PRODUCTS_MAP[productId]
    return (
        <>
            <Hero>
                <h1 dangerouslySetInnerHTML={{
                    __html: product.html
                }} />
                <h2>
                    <span dangerouslySetInnerHTML={{
                        __html: product.type.html
                    }} />
                </h2>
                <h2><Price amount={product.type.value} abbreviate /></h2>
                <IncrementQuantityCTA productId={productId}>Add to Cart</IncrementQuantityCTA>
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
