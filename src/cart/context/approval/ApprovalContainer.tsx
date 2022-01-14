import { FC, useReducer } from "react"
import Context from "./Context"
import reducer from "./reducer"
const ApprovalContainer: FC = ({ children }) => {
    const contextValue = useReducer(reducer, undefined)
    return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
export default ApprovalContainer
