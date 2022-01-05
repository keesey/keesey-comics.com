import { useCallback, useContext, VFC } from "react";
import Context from "~/cart/context/order/Context";
import CartItem from "./CartItem";
import styles from "./index.module.scss";
const ShoppingCart: VFC = () => {
    const [items, dispatch] = useContext(Context) ?? [];
    const handleRemoveAllButtonClick = useCallback(() => {
        if (confirm("Are you sure you want to remove all items from your cart?")) {
            dispatch?.({ type: "INITIALIZE", payload: [] });
        }
    }, [dispatch]);
    return (
        <section className={styles.main}>
            {!items?.length && <p key={0} className={styles.empty}>Your cart is empty.</p>}
            {items?.map((item) => (
                <CartItem key={item.productId} item={item} />
            ))}
            {Boolean(items?.length) && (
                <a
                    key={-1}
                    className={styles.removeAll}
                    onClick={handleRemoveAllButtonClick}
                    role="button"
                >
                    Remove All Items
                </a>
            )}
        </section>
    );
};
export default ShoppingCart;
