import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useMemo, useState, VFC } from "react"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import Context from "~/cart/context/order/Context"
import useQuantityIncrementer from "~/cart/hooks/useQuantitytIncrementer"
import useAnimation from "~/hooks/useAnimation"
import styles from "./index.module.scss"
export interface Props {
    id: string
    noTitle?: boolean
}
const Product: VFC<Props> = ({ id, noTitle }) => {
    const [animationRef, animate] = useAnimation<HTMLElement>("pulse")
    const ids = useMemo(() => [id], [id])
    const handleAddToCartClick = useQuantityIncrementer(ids)
    const [order] = useContext(Context) ?? []
    const quantity = useMemo(() => {
        const item = order?.items.find(item => item.productId === id)
        return item ? item.quantity : 0
    }, [id, order?.items])
    const [lastQuantity, setLastQuantity] = useState(quantity)
    useEffect(() => {
        if (quantity > lastQuantity) {
            setLastQuantity(quantity)
            animate()
        }
    }, [animate, lastQuantity, quantity])
    const product = PRODUCTS_MAP[id]
    if (!product) {
        return null
    }
    const href = product.path ?? `/products/${id}`
    const imgSrc = product.imagePath ?? `/images/products/${id}.png`
    return (
        <section className={styles.main} ref={animationRef}>
            <h3 className={noTitle ? styles.hidden : undefined} dangerouslySetInnerHTML={{ __html: product.html }} />
            <Link href={href}>
                <a>
                    <Image layout="fixed" src={imgSrc} width={172} height={263} alt={product.name} />
                </a>
            </Link>
            <nav className={styles.controls}>
                <Link href={href} passHref>
                    <a role="button">More Info</a>
                </Link>
                <a role="button" onClick={handleAddToCartClick}>
                    Add to Cart
                </a>
            </nav>
        </section>
    )
}
export default Product
