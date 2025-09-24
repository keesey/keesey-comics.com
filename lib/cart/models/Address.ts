import type { CountryCode } from "../../external/usps/USPS_COUNTRIES"
export type Address = Readonly<{
  countryCode: CountryCode
  postalCode?: string
}>
