import { FC, PropsWithChildren, useEffect, useReducer } from "react"
import Context from "./Context"
import STORAGE_KEY from "./STORAGE_KEY"
import reducer from "./reducer"
const AddressContainer: FC<PropsWithChildren> = ({ children }) => {
    const contextValue = useReducer(reducer, undefined)
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
                localStorage.removeItem(STORAGE_KEY)
            }
        } else {
            dispatch({ type: "INITIALIZE", payload: { country: "United States" } })
        }
    }, [dispatch])
    useEffect(() => {
        if (state) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
            } catch (e) {
                alert(e)
            }
        }
    }, [state])
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
export default AddressContainer
