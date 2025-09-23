"use client"
import { Context as AddressContext } from "@/lib/cart/context/address/Context"
import { isDomestic } from "@/lib/cart/functions/isDomestic"
import type {
  OnShippingAddressChangeActions,
  OnShippingAddressChangeData,
} from "@paypal/paypal-js"
import { useCallback, useContext } from "react"
export const useOnShippingAddressChange = () => {
  const [address, dispatch] = useContext(AddressContext) ?? []
  return useCallback(
    async (
      data: OnShippingAddressChangeData,
      actions: OnShippingAddressChangeActions,
    ) => {
      if (
        address?.country !== data.shippingAddress.countryCode ||
        (isDomestic(address.country) &&
          address.postalCode !== data.shippingAddress.postalCode)
      ) {
        dispatch?.({
          type: "SET_COUNTRY",
          payload: data.shippingAddress.countryCode,
        })
        dispatch?.({
          type: "SET_POSTAL_CODE",
          payload: data.shippingAddress.postalCode,
        })
        alert(
          "The pricing has been updated to reflect a change in address. Please review and submit your payment again.",
        )
        return actions.reject()
      }
    },
    [address, dispatch],
  )
}
