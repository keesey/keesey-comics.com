import { FSAWithPayload } from "flux-standard-action"
import { State } from "./State"
export type InitializeAction = FSAWithPayload<"INITIALIZE", State>
export type SetCountryAction = FSAWithPayload<"SET_COUNTRY", string>
export type SetPostalCodeAction = FSAWithPayload<"SET_POSTAL_CODE", string>
export type Action = InitializeAction | SetCountryAction | SetPostalCodeAction
