"use client"
import type { ShippingOptionList } from "@/lib/cart/constants/SHIPPING_OPTIONS"
import { Context } from "@/lib/cart/context/order/Context"
import { type ChangeEvent, useCallback, useContext } from "react"
export type ShippingOptionProps = {
  list: ShippingOptionList
}
export const ShippingOption = ({ list }: ShippingOptionProps) => {
  const [order, dispatch] = useContext(Context) ?? []
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.checked) {
        dispatch?.({
          type: "SELECT_SHIPPING_OPTION",
          payload: { shippingOptionId: event.currentTarget.value },
        })
      }
    },
    [dispatch],
  )
  return (
    <section className="w-full">
      <h3 className="font-bold">Options: {list.name}</h3>
      <div className="flex flex-wrap gap-4">
        {list.options.map(option => (
          <label key={option.id} className="flex cursor-pointer gap-1">
            <span>{option.name}</span>
            <input
              type="radio"
              value={option.id}
              name={list.name}
              checked={order?.shippingOptionIds.includes(option.id)}
              onChange={handleInputChange}
            />
          </label>
        ))}
      </div>
    </section>
  )
}
