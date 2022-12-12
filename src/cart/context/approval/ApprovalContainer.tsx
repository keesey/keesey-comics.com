import { FC, PropsWithChildren, useReducer } from "react"
import Context from "./Context"
import reducer from "./reducer"
const ApprovalContainer: FC<PropsWithChildren> = ({ children }) => {
    const contextValue = useReducer(reducer, undefined)
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
export default ApprovalContainer
