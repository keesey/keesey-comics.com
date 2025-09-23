"use client"
import { type PropsWithChildren, useReducer } from "react"
import { Context } from "./Context"
import { reducer } from "./reducer"
export const ApprovalContainer = ({ children }: PropsWithChildren) => {
  const contextValue = useReducer(reducer, undefined)
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
