import { FC, useEffect, useReducer } from "react"
import Context from "./Context"
import reducer from "./reducer"
import { State } from "./State"
import STORAGE_KEY from "./STORAGE_KEY"
const DEFAULT_STATE: State = {
    items: [],
    shippingOptionIds: [],
}
const OrderContainer: FC = ({ children }) => {
    const contextValue = useReducer(reducer, DEFAULT_STATE)
    const [state, dispatch] = contextValue
    useEffect(() => {
        const payloadJSON = localStorage.getItem(STORAGE_KEY)
        if (payloadJSON) {
            try {
                const payload = JSON.parse(payloadJSON)
                if (payload && typeof payload === "object") {
                    dispatch({ type: "INITIALIZE", payload })
                }
            } catch (e) {
                // Corrupted.
                localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_STATE))
            }
        }
    }, [dispatch])
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
        } catch (e) {
            alert(e)
        }
    }, [state])
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
export default OrderContainer
