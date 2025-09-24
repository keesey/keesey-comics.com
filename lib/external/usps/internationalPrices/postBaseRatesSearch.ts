import { CountryCode } from "@/lib/external/usps/USPS_COUNTRIES"
import axios from "axios"
export interface BaseRateOption {
  totalBasePrice: number
  // Ignoring the rest.
}
export interface BaseRatesQuery {
  destinationCountryCode: CountryCode
  destinationEntryFacilityType: "NONE" // Leaving others out
  height: number // inches, lowest dimension value
  length: number // inches, highest dimension value
  mailClass: "FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE" // Leaving others out
  originZIPCode: string
  priceType: "COMMERCIAL" // Leaving others out
  processingCategory: "MACHINABLE" | "NONSTANDARD"
  rateIndicator: "SP" // Leaving others out
  weight: number // pounds
  width: number // inches, middle dimension value
  // Optional properties not included
}
export const postBaseRatesSearch = async (
  accessToken: string,
  query: BaseRatesQuery,
) => {
  const response = await axios.post<BaseRateOption>(
    "https://apis.usps.com/international-prices/v3/base-rates/search",
    query,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  )
  return response.data
}
