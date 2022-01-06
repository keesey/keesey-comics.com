import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useCallback, useContext, useMemo, VFC } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { SHIPPING_OPTIONS_MAP } from "~/cart/constants/SHIPPING_OPTIONS";
import Context from "~/cart/context/order/Context";
import { OrderItem } from "~/cart/models/OrderItem";
import { ShippingOption } from "~/cart/models/ShippingOption";
import Price from "~/components/Price";
import Section from "../Section";
import styles from "./index.module.scss";
export interface Props {
    item: OrderItem;
}
const CartItem: VFC<Props> = ({ item }) => {
    const [order, dispatch] = useContext(Context) ?? [];
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
    const product = PRODUCTS_MAP[item.productId];
    const href = product.path ?? `/products/${item.productId}`;
    const imgSrc = product.imagePath ?? `/images/products/${item.productId}.png`;
    const amount = useMemo(
        () => item.quantity * product.type.value,
        [item, product]
    );
    const shippingOption = useMemo<ShippingOption | undefined>(
        () => {
            if (!product.type.shippingOptions) {
                return undefined;
            }
            const id = order?.shippingOptionIds.find(id => product.type.shippingOptions!.some(option => option.id === id))
                ?? product.type.shippingOptions[0].id
            return SHIPPING_OPTIONS_MAP[id]
        },
        [product.type, order?.shippingOptionIds],
    )
    return (
        <Section>
            <div className={styles.main}>
                <header className={styles.header}>
                    <Link href={href}>
                        <a className={styles.productLink}>
                            <h3 dangerouslySetInnerHTML={{ __html: product.html }} />
                        </a>
                    </Link>
                    <input
                        key="quantity"
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={handleQuantityInputChange}
                    />
                    <span className={styles.amount}>
                        <Price amount={amount} />
                    </span>
                </header>
                <div className={styles.content}>
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
                    <div className={styles.details}>
                        <p dangerouslySetInnerHTML={{ __html: product.type.html }} />
                        {shippingOption && <p><b>Shipping Option</b>: {shippingOption.name}</p>}
                    </div>
                    <a
                        key="remove"
                        className={styles.remove}
                        onClick={handleRemoveButtonClick}
                        role="button"
                    >
                        Remove
                    </a>
                </div>
            </div>
        </Section>
    );
};
export default CartItem;
