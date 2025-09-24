"use client"
import {
  type CountryCode,
  USPS_COUNTRIES,
} from "@/lib/external/usps/USPS_COUNTRIES"
import { Context } from "@/lib/cart/context/address/Context"
import { isDomestic } from "@/lib/cart/functions/isDomestic"
import { type ChangeEvent, useCallback, useContext, useMemo } from "react"
export const AddressForm = () => {
  const [address, dispatch] = useContext(Context) ?? []
  console.debug(address)
  const domestic = useMemo(
    () => Boolean(address?.countryCode && isDomestic(address.countryCode)),
    [address?.countryCode],
  )
  const handleCountrySelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch?.({
        type: "SET_COUNTRY_CODE",
        payload: event.currentTarget.value as CountryCode,
      })
    },
    [dispatch],
  )
  const handlePostalCodeInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch?.({
        type: "SET_POSTAL_CODE",
        payload: event.currentTarget.value,
      })
    },
    [dispatch],
  )
  if (!address) {
    return null
  }
  return (
    <div className="flex w-full flex-col items-end gap-2">
      <select
        className="w-full rounded-2xl border-2 bg-white p-2 placeholder-gray-400 dark:text-black"
        defaultValue="US"
        onChange={handleCountrySelectChange}
        value={address.countryCode}
        title="Country"
      >
        {USPS_COUNTRIES.map(([code, name]) => (
          <option key={code} label={name} value={code} />
        ))}
      </select>
      {domestic && (
        <input
          className="w-sm max-w-[8em] rounded-2xl border-2 bg-white p-2 text-center placeholder-gray-400 dark:text-black"
          maxLength={32}
          name="postalCode"
          onChange={handlePostalCodeInputChange}
          placeholder="ZIP Code"
          type="text"
          value={address.postalCode ?? ""}
        />
      )}
    </div>
  )
}
