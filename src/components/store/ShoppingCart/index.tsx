import { useContext, VFC } from "react"
import Context from "~/cart/context/order/Context"
import CartItem from "./CartItem"
import styles from "./index.module.scss"
const ShoppingCart: VFC = () => {
    const [items] = useContext(Context) ?? []
    return (
        <section className={styles.main}>
            {!items?.length && (
                <p key={0}>Your cart is empty</p>
            )}
            {(items?.map(item => (
                <CartItem key={item.productId} item={item} />
            )))}
        </section>
    )
}
export default ShoppingCart
