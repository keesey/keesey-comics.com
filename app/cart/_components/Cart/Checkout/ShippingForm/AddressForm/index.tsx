"use client"
import { USPS_COUNTRIES } from "@/lib/cart/constants/USPS_COUNTRIES"
import { Context } from "@/lib/cart/context/address/Context"
import { isDomestic } from "@/lib/cart/functions/isDomestic"
import { type ChangeEvent, useCallback, useContext, useMemo } from "react"
export const AddressForm = () => {
  const [address, dispatch] = useContext(Context) ?? []
  const domestic = useMemo(
    () => Boolean(address?.country && isDomestic(address.country)),
    [address?.country],
  )
  const handleCountrySelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch?.({ type: "SET_COUNTRY", payload: event.currentTarget.value })
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
        className="w-sm rounded-2xl border-2 bg-white p-2 placeholder-gray-400 dark:text-black"
        onChange={handleCountrySelectChange}
        required
        value={address.country}
      >
        {USPS_COUNTRIES.map(value => (
          <option key={value} label={value} value={value} />
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
