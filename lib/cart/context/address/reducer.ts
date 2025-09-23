import type { Reducer } from "react"
import { USPS_COUNTRIES } from "../../constants/USPS_COUNTRIES"
import { isDomestic } from "../../functions/isDomestic"
import type { Action } from "./Action"
import type { State } from "./State"
export const reducer: Reducer<State | undefined, Action> = (
  prevState,
  action,
) => {
  switch (action.type) {
    case "INITIALIZE": {
      const country =
        action.payload.country &&
        USPS_COUNTRIES.includes(action.payload.country)
          ? action.payload.country
          : undefined
      const postalCode =
        (country && isDomestic(country) && action.payload.postalCode) ||
        undefined
      return {
        ...(country ? { country } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    case "SET_COUNTRY": {
      const country = USPS_COUNTRIES.includes(action.payload)
        ? action.payload
        : undefined
      const postalCode =
        (country && isDomestic(country) && prevState?.postalCode) || undefined
      return {
        ...(country ? { country } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    case "SET_POSTAL_CODE": {
      const country = prevState?.country
      const postalCode =
        (country && isDomestic(country) && action.payload) || undefined
      return {
        ...(country ? { country } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    default: {
      return prevState
    }
  }
}
