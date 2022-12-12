import { FC, useCallback, useContext } from "react"
import Context from "~/cart/context/order/Context"
import CartItem from "./CartItem"
import styles from "./index.module.scss"
import Section from "./Section"
const ShoppingCart: FC = () => {
    const [order, dispatch] = useContext(Context) ?? []
    const handleRemoveAllButtonClick = useCallback(() => {
        if (confirm("Are you sure you want to remove all items from your cart?")) {
            dispatch?.({ type: "RESET" })
        }
    }, [dispatch])
    if (!order) {
        return null
    }
    return (
        <section className={styles.main}>
            <Section key="header">
                <h2>1. Review Your Order</h2>
            </Section>
            {!order.items?.length && (
                <Section key="empty">
                    <div className={styles.empty}>Your cart is empty.</div>
                </Section>
            )}
            {order.items?.map(item => (
                <CartItem key={`product:${item.productId}`} item={item} />
            ))}
            {order.items?.length > 1 && (
                <a key="removeAll" className={styles.removeAll} onClick={handleRemoveAllButtonClick} role="button">
                    Remove All Items
                </a>
            )}
        </section>
    )
}
export default ShoppingCart
