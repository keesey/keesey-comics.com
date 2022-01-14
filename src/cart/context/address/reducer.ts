import { Reducer } from "react"
import USPS_COUNTRIES from "~/cart/constants/USPS_COUNTRIES"
import isDomestic from "~/cart/functions/isDomestic"
import { Action } from "./Action"
import { State } from "./State"
const reducer: Reducer<State, Action> = (prevState, action) => {
    switch (action.type) {
        case "INITIALIZE": {
            const country =
                action.payload.country && USPS_COUNTRIES.includes(action.payload.country)
                    ? action.payload.country
                    : undefined
            const postalCode = (country && isDomestic(country) && action.payload.postalCode) || undefined
            return {
                ...(country ? { country } : null),
                ...(postalCode ? { postalCode } : null),
            }
        }
        case "SET_COUNTRY": {
            const country = USPS_COUNTRIES.includes(action.payload) ? action.payload : undefined
            const postalCode = (country && isDomestic(country) && prevState.postalCode) || undefined
            return {
                ...(country ? { country } : null),
                ...(postalCode ? { postalCode } : null),
            }
        }
        case "SET_POSTAL_CODE": {
            const country = prevState.country
            const postalCode = (country && isDomestic(country) && action.payload) || undefined
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
export default reducer
