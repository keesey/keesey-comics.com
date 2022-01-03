import { FC, useEffect, useReducer } from "react";
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS";
import STORAGE_KEY from "~/cart/constants/STORAGE_KEY";
import { OrderItem } from "~/cart/models/OrderItem";
import Context from "./Context";
import reducer from "./reducer";
const OrderContainer: FC = ({ children }) => {
    const contextValue = useReducer(reducer, []);
    const [state, dispatch] = contextValue;
    useEffect(() => {
        const payloadJSON = localStorage.getItem(STORAGE_KEY);
        if (payloadJSON) {
            try {
                const payload = JSON.parse(payloadJSON);
                if (
                    Array.isArray(payload) &&
                    payload.every((item: OrderItem) => {
                        const product = PRODUCTS_MAP[item.productId];
                        if (!product) {
                            return false;
                        }
                        if (typeof item.quantity !== "number" || !isFinite(item.quantity)) {
                            return false;
                        }
                        if (
                            item.shippingOptionId &&
                            !product.type.shippingOptions?.some(
                                (option) => option.id === item.shippingOptionId
                            )
                        ) {
                            return false;
                        }
                        return true;
                    })
                ) {
                    dispatch({ type: "INITIALIZE", payload });
                }
            } catch (e) {
                // Corrupted.
                localStorage.setItem(STORAGE_KEY, "[]");
            }
        }
    }, [dispatch]);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default OrderContainer;
