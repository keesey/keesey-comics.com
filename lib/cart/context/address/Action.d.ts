import type { FSAWithPayload } from "flux-standard-action"
import type { State } from "./State"
import type { CountryCode } from "~/lib/constants/USPS_COUNTRIES"
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>
export type SetCountryAction = FSAWithPayload<"SET_COUNTRY_CODE", CountryCode>
export type SetPostalCodeAction = FSAWithPayload<"SET_POSTAL_CODE", string>
export type Action = InitializeAction | SetCountryAction | SetPostalCodeAction
