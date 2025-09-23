"use client"
import { Context } from "@/lib/cart/context/order/Context"
import Link from "next/link"
import { useContext } from "react"
import { ShoppingCart } from "./ShoppingCart"
import { CTA } from "@/components/CTA"
import { PayPalButtons } from "./PayPalButtons"
import { ShippingForm } from "./ShippingForm"
export const Checkout = () => {
  const [order] = useContext(Context) ?? []
  return (
    <>
      <h1 className="mb-8 text-center text-2xl font-bold">
        Your Shopping Cart
      </h1>
      <ShoppingCart />
      <br />
      <Link href="/store" className="mx-auto flex items-center justify-center">
        <CTA>{`${order?.items.length ? "Keep" : "Start"} Shopping`}</CTA>
      </Link>
      <br />
      <ShippingForm />
      <br />
      <PayPalButtons />
    </>
  )
}
