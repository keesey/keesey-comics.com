import {
  USPS_DOMESTIC_COUNTRY_CODES,
  type CountryCode,
} from "@/lib/external/usps/USPS_COUNTRIES"
export const isDomestic = (countryCode: CountryCode) =>
  USPS_DOMESTIC_COUNTRY_CODES.includes(countryCode)
