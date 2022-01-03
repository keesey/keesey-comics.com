import { FC, useContext, useEffect, useReducer, useRef, useState } from "react";
import { Costs } from "~/cart/models/Costs";
import Context from "./Context";
import AddressContext from "../address/Context";
import OrderContext from "../order/Context";
import axios from "axios";
const CostsContainer: FC = ({ children }) => {
    const [pending, setPending] = useState(false);
    const [error, setError] = useState<Error | undefined>();
    const [costs, setCosts] = useState<Costs | undefined>();
    const [address] = useContext(AddressContext) ?? [];
    const [order] = useContext(OrderContext) ?? [];
    const [abortController] = useState(() => new AbortController());
    useEffect(
        () => {
            abortController.abort();
            setError(undefined);
            setCosts(undefined);
            if (!address || !order) {
                setPending(false);
            } else {
                setPending(true);
                (async () => {
                    try {
                        const result = await axios.post<Costs>('/api/costs', { address, order }, { signal: abortController.signal });
                        setCosts(result.data);
                    } catch (e) {
                        setError(e instanceof Error ? e : new Error(String(e)));
                    } finally {
                        setPending(false)
                    }
                })();
                return () => abortController.abort();
            }
        },
        [abortController, address, order],
    );
    return <Context.Provider value={{ costs, error, pending }}>{children}</Context.Provider>;
};
export default CostsContainer;
