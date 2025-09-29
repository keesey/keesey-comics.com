"use client"
import { SHIPPING_OPTION_LISTS } from "@/lib/cart/constants/SHIPPING_OPTIONS"
import { Context } from "@/lib/cart/context/order/Context"
import { useContext } from "react"
import { ShippingOption } from "./ShippingOption"
export const ShippingOptionForm = () => {
  const [order] = useContext(Context) ?? []
  if (!order?.shippingOptionIds?.length) {
    return null
  }
  return (
    <>
      {SHIPPING_OPTION_LISTS.filter(list =>
        list.options.some(option =>
          order.shippingOptionIds.includes(option.id),
        ),
      ).map(list => (
        <ShippingOption key={list.name} list={list} />
      ))}
    </>
  )
}
