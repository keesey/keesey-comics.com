import { FC, useEffect, useReducer } from "react";
import STORAGE_KEY from "~/cart/constants/STORAGE_KEY";
import Context from "./Context";
import reducer from "./reducer";
import { State } from "./State";
const DEFAULT_STATE: State = { country: "United States" };
const AddressContainer: FC = ({ children }) => {
    const contextValue = useReducer(reducer, DEFAULT_STATE);
    const [state, dispatch] = contextValue;
    useEffect(() => {
        const payloadJSON = localStorage.getItem(STORAGE_KEY);
        if (payloadJSON) {
            try {
                const payload = JSON.parse(payloadJSON);
                if (payload && typeof payload === "object") {
                    dispatch({ type: "INITIALIZE", payload });
                }
            } catch (e) {
                // Corrupted.
                localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_STATE));
            }
        }
    }, [dispatch]);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [state]);
    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
export default AddressContainer;
