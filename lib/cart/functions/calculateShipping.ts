"use server"
import { postToken } from "@/lib/external/usps/oauth2/postToken"
import type { Shipment } from "../models/Shipment"
import { isDomestic } from "./isDomestic"
import {
  postBaseRatesSearch,
  type BaseRatesQuery,
} from "@/lib/external/usps/prices/postBaseRatesSearch"
import {
  postBaseRatesSearch as postIntlBaseRatesSearch,
  type BaseRatesQuery as IntlBaseRatesQuery,
} from "@/lib/external/usps/internationalPrices/postBaseRatesSearch"
import { OUNCES_PER_POUND } from "../constants/OUNCES_PER_POUND"
export const calculateShipping = async (
  shipment: Shipment,
): Promise<number> => {
  const dimensions = [...shipment.package.dimensions].sort()
  const baseQuery: Pick<
    BaseRatesQuery | IntlBaseRatesQuery,
    | "destinationEntryFacilityType"
    | "height"
    | "length"
    | "originZIPCode"
    | "priceType"
    | "processingCategory"
    | "rateIndicator"
    | "weight"
    | "width"
  > = {
    destinationEntryFacilityType: "NONE",
    height: dimensions[0],
    length: dimensions[2],
    originZIPCode: process.env.ORIGIN_ZIP_CODE ?? "",
    priceType: "COMMERCIAL",
    processingCategory: "NONSTANDARD",
    rateIndicator: "SP",
    weight: shipment.package.ounces / OUNCES_PER_POUND,
    width: dimensions[1],
  }
  const { access_token } = await postToken()
  const { totalBasePrice } = await (isDomestic(shipment.address.countryCode)
    ? postBaseRatesSearch(access_token, {
        ...baseQuery,
        destinationZIPCode: shipment.address.postalCode ?? "",
        mailClass: "MEDIA_MAIL",
      })
    : postIntlBaseRatesSearch(access_token, {
        ...baseQuery,
        destinationCountryCode: shipment.address.countryCode,
        mailClass: "FIRST-CLASS_PACKAGE_INTERNATIONAL_SERVICE",
      }))
  return totalBasePrice
}
