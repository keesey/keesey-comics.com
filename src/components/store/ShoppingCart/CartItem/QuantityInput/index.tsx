import {
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    useCallback,
    useContext,
    useEffect,
    useState,
    VFC
} from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import Context from "~/cart/context/order/Context";
import { OrderItem } from "~/cart/models/OrderItem";
import styles from "./index.module.scss";
export interface Props {
    item: OrderItem;
}
const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
        event.currentTarget.blur();
    }
};
const QuantityInput: VFC<Props> = ({ item }) => {
    const [, dispatch] = useContext(Context) ?? [];
    const product = PRODUCTS_MAP[item.productId];
    const [quantity, setQuantity] = useState(() => item.quantity);
    useEffect(() => setQuantity(item.quantity), [item.quantity]);
    const handleBlurOrMouseUp = useCallback(
        (event: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) => {
            const newQuantity = Math.min(
                product.type.maximum,
                event.currentTarget.valueAsNumber
            );
            setQuantity(newQuantity);
            dispatch?.({
                type: "SET_QUANTITY",
                payload: {
                    productId: item.productId,
                    quantity: newQuantity,
                },
            });
        },
        [dispatch, item.productId, product.type.maximum]
    );
    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setQuantity(event.currentTarget.valueAsNumber);
        },
        []
    );
    return (
        <input
            className={styles.main}
            key="quantity"
            max={product.type.maximum}
            min={1}
            onBlur={handleBlurOrMouseUp}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onMouseUp={handleBlurOrMouseUp}
            type="number"
            value={isNaN(quantity) ? "" : quantity}
        />
    );
};
export default QuantityInput;
