"use client"
import { PRODUCTS_MAP } from "@/lib/cart/constants/PRODUCTS"
import { Context } from "@/lib/cart/context/order/Context"
import type { OrderItem } from "@/lib/cart/models/OrderItem"
import {
  type ChangeEvent,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
export interface QuantityInputProps {
  item: OrderItem
}
const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    event.currentTarget.blur()
  }
}
export const QuantityInput = ({ item }: QuantityInputProps) => {
  const [, dispatch] = useContext(Context) ?? []
  const product = PRODUCTS_MAP[item.productId]
  const [quantity, setQuantity] = useState(item.quantity)
  useEffect(() => setQuantity(item.quantity), [item.quantity])
  const handleBlurOrMouseUp = useCallback(
    (event: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) => {
      const newQuantity = Math.min(
        product.type.maximum,
        event.currentTarget.valueAsNumber,
      )
      setQuantity(newQuantity)
      dispatch?.({
        type: "SET_QUANTITY",
        payload: {
          productId: item.productId,
          quantity: newQuantity,
        },
      })
    },
    [dispatch, item.productId, product.type.maximum],
  )
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.currentTarget.valueAsNumber)
  }, [])
  return (
    <input
      className="rounded-lg border-2 bg-white text-center placeholder-gray-400 dark:text-black"
      max={product.type.maximum}
      min={1}
      onBlur={handleBlurOrMouseUp}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onMouseUp={handleBlurOrMouseUp}
      type="number"
      value={isNaN(quantity) ? "" : quantity}
    />
  )
}
