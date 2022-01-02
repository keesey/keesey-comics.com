import { FC, useEffect, useReducer } from "react";
import STORAGE_KEY from "./constants/STORAGE_KEY";
import Context from "./context/Context";
import reducer from "./context/reducer";
const CartContainer: FC = ({ children }) => {
    const contextValue = useReducer(reducer, {
        containers: [],
        order: {},
        products: [],
    });
    const [state, dispatch] = contextValue;
    useEffect(() => {
        const payloadJSON = localStorage.getItem(STORAGE_KEY);
        if (payloadJSON) {
            try {
                const payload = JSON.parse(payloadJSON);
                if (
                    payload &&
                    typeof payload === "object" &&
                    Object.values(payload).every(
                        (n) =>
                            typeof n === "number" &&
                            n === Math.floor(n) &&
                            isFinite(n) &&
                            n > 0
                    )
                ) {
                    dispatch({ type: "SET_ORDER", payload });
                }
            } catch (e) {
                // Corrupted.
                localStorage.setItem(STORAGE_KEY, "{}");
            }
        }
    }, [dispatch]);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.order));
    }, [state.order]);
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};
export default CartContainer;
