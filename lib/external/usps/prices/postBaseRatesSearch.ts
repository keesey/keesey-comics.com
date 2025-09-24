import axios from "axios"
export interface BaseRateOption {
  totalBasePrice: number
  // Ignoring the rest.
}
export interface BaseRatesQuery {
  destinationEntryFacilityType: "NONE" // Leaving others out
  destinationZIPCode: string
  height: number // inches, lowest dimension value
  length: number // inches, highest dimension value
  mailClass: "MEDIA_MAIL" // Leaving others out
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
    "https://apis.usps.com/prices/v3/base-rates/search",
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
