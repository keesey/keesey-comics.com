"use client"
import { Context } from "@/lib/cart/context/order/Context"
import { useCallback, useContext } from "react"
import { CartItem } from "./CartItem"
import { Section } from "./Section"
export const ShoppingCart = () => {
  const [order, dispatch] = useContext(Context) ?? []
  const handleRemoveAllButtonClick = useCallback(() => {
    if (confirm("Are you sure you want to remove all items from your cart?")) {
      dispatch?.({ type: "RESET" })
    }
  }, [dispatch])
  if (!order) {
    return null
  }
  return (
    <section className="mx-auto flex max-w-4xl flex-col px-4">
      <Section>
        <h2 className="text-center text-xl font-bold">1. Review Your Order</h2>
      </Section>
      {!order.items?.length && (
        <Section>
          <div>Your cart is empty.</div>
        </Section>
      )}
      {order.items?.map(item => (
        <CartItem key={item.productId} item={item} />
      ))}
      {order.items?.length > 1 && (
        <div className="relative mt-2 w-full">
          <button
            className="absolute right-4 cursor-pointer text-right font-medium text-red-500 underline underline-offset-2"
            onClick={handleRemoveAllButtonClick}
          >
            Remove All Items
          </button>
        </div>
      )}
    </section>
  )
}
