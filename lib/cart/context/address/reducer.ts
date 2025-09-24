import type { Reducer } from "react"
import { USPS_COUNTRY_CODES } from "../../../external/usps/USPS_COUNTRIES"
import { isDomestic } from "../../functions/isDomestic"
import type { Action } from "./Action"
import type { State } from "./State"
export const reducer: Reducer<State | undefined, Action> = (
  prevState,
  action,
) => {
  switch (action.type) {
    case "INITIALIZE": {
      const countryCode =
        action.payload.countryCode &&
        USPS_COUNTRY_CODES.includes(action.payload.countryCode)
          ? action.payload.countryCode
          : undefined
      const postalCode =
        (countryCode && isDomestic(countryCode) && action.payload.postalCode) ||
        undefined
      return {
        ...(countryCode ? { countryCode } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    case "SET_COUNTRY_CODE": {
      const countryCode = USPS_COUNTRY_CODES.includes(action.payload)
        ? action.payload
        : undefined
      const postalCode =
        (countryCode && isDomestic(countryCode) && prevState?.postalCode) ||
        undefined
      return {
        ...(countryCode ? { countryCode } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    case "SET_POSTAL_CODE": {
      const countryCode = prevState?.countryCode
      const postalCode =
        (countryCode && isDomestic(countryCode) && action.payload) || undefined
      return {
        ...(countryCode ? { countryCode } : null),
        ...(postalCode ? { postalCode } : null),
      }
    }
    default: {
      return prevState
    }
  }
}
