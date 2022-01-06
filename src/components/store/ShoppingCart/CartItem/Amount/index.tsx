import { useMemo, VFC } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import { OrderItem } from "~/cart/models/OrderItem";
import Price from "~/components/Price";
import styles from "./index.module.scss";
export interface Props {
    item: OrderItem;
}
const Amount: VFC<Props> = ({ item }) => {
    const product = PRODUCTS_MAP[item.productId];
    const amount = useMemo(
        () => item.quantity * product.type.value,
        [item, product]
    );
    return (
        <span className={styles.main}>
            <Price amount={amount} />
        </span>
    );
};
export default Amount;
