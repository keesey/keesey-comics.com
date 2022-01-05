import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useCallback, useContext, useMemo, VFC } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { SHIPPING_OPTIONS_MAP } from "~/cart/constants/SHIPPING_OPTIONS";
import Context from "~/cart/context/order/Context";
import { OrderItem } from "~/cart/models/OrderItem";
import Price from "~/components/Price";
import styles from "./index.module.scss";
export interface Props {
    item: OrderItem;
}
const CartItem: VFC<Props> = ({ item }) => {
    const [, dispatch] = useContext(Context) ?? [];
    const handleQuantityInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch?.({
                type: "SET_QUANTITY",
                payload: {
                    productId: item.productId,
                    quantity: event.currentTarget.valueAsNumber,
                },
            });
        },
        [dispatch, item.productId]
    );
    const handleRemoveButtonClick = useCallback(() => {
        if (confirm("Are you sure you want to remove this from your cart?")) {
            dispatch?.({
                type: "REMOVE_PRODUCT",
                payload: { productId: item.productId },
            });
        }
    }, [dispatch, item.productId]);
    const handleShippingOptionSelectChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            dispatch?.({
                type: "SET_SHIPPING_OPTION",
                payload: {
                    productId: item.productId,
                    shippingOptionId: event.currentTarget.value,
                },
            });
        },
        [dispatch, item.productId]
    );
    const product = PRODUCTS_MAP[item.productId];
    const href = product.path ?? `/products/${item.productId}`;
    const imgSrc = product.imagePath ?? `/images/products/${item.productId}.png`;
    const amount = useMemo(
        () => item.quantity * product.type.value,
        [item, product]
    );
    return (
        <section className={styles.main}>
            <div className={styles.content}>
                <header>
                    <Link href={href}>
                        <a>
                            <h3 dangerouslySetInnerHTML={{ __html: product.html }} />
                        </a>
                    </Link>
                </header>
                <div className={styles.details}>
                    <Link href={href}>
                        <a>
                            <Image
                                layout="fixed"
                                src={imgSrc}
                                width={86}
                                height={132}
                                alt={product.name}
                            />
                        </a>
                    </Link>
                    <p dangerouslySetInnerHTML={{ __html: product.type.html }} />
                </div>
            </div>
            <nav>
                <input
                    key="quantity"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={handleQuantityInputChange}
                />
                {product.type.shippingOptions && (
                    <select
                        key="shipping"
                        value={item.shippingOptionId}
                        onChange={handleShippingOptionSelectChange}
                    >
                        {product.type.shippingOptions.map((option) => (
                            <option key={option.id} value={option.id} label={option.name} />
                        ))}
                    </select>
                )}
            </nav>
            <footer>
                <span className={styles.amount}>
                    <Price amount={amount} />
                </span>
                <a
                    key="remove"
                    className={styles.remove}
                    onClick={handleRemoveButtonClick}
                    role="button"
                >
                    Remove
                </a>
            </footer>
        </section>
    );
};
export default CartItem;
