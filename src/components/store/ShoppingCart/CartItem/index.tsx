import Link from "next/link"
import { FC } from "react"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import { OrderItem } from "~/cart/models/OrderItem"
import Section from "../Section"
import Amount from "./Amount"
import styles from "./index.module.scss"
import QuantityInput from "./QuantityInput"
import RemoveButton from "./RemoveButton"
import ShippingOption from "./ShippingOption"
import Thumbnail from "./Thumbnail"
export interface Props {
    item: OrderItem
}
const CartItem: FC<Props> = ({ item }) => {
    const product = PRODUCTS_MAP[item.productId]
    const href = product.path ?? `/products/${item.productId}`
    return (
        <Section>
            <div className={styles.main}>
                <header className={styles.header}>
                    <Link href={href} legacyBehavior>
                        <a className={styles.productLink}>
                            <h3 dangerouslySetInnerHTML={{ __html: product.html }} />
                        </a>
                    </Link>
                    <QuantityInput item={item} />
                    <Amount item={item} />
                </header>
                <div className={styles.content}>
                    <Thumbnail product={product} />
                    <div className={styles.details}>
                        <p dangerouslySetInnerHTML={{ __html: product.type.html }} />
                        <ShippingOption productType={product.type} />
                    </div>
                    <RemoveButton productId={item.productId} />
                </div>
            </div>
        </Section>
    )
}
export default CartItem
