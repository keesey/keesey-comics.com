"use client"
import { USPS_COUNTRY_CODES } from "@/lib/external/usps/USPS_COUNTRIES"
import { type PropsWithChildren, useEffect, useReducer } from "react"
import { Context } from "./Context"
import { STORAGE_KEY } from "./STORAGE_KEY"
import { reducer } from "./reducer"
export const AddressContainer = ({ children }: PropsWithChildren) => {
  const contextValue = useReducer(reducer, undefined)
  const [state, dispatch] = contextValue
  useEffect(() => {
    const payloadJSON = localStorage.getItem(STORAGE_KEY)
    if (payloadJSON) {
      try {
        const payload = JSON.parse(payloadJSON)
        if (
          payload &&
          typeof payload === "object" &&
          USPS_COUNTRY_CODES.includes(payload.countryCode)
        ) {
          return dispatch({
            type: "INITIALIZE",
            payload: {
              countryCode: payload.countryCode,
              postalCode:
                typeof payload.postalCode === "string"
                  ? payload.postalCode
                  : undefined,
            },
          })
        }
      } catch {
        // Corrupted.
        localStorage.removeItem(STORAGE_KEY)
      }
    }
    dispatch({ type: "INITIALIZE", payload: { countryCode: "US" } })
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
