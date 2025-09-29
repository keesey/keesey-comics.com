"use client"
import { Context } from "@/lib/cart/context/approval/Context"
import { useContext } from "react"
import { Checkout } from "./Checkout"
import { Invoice } from "./Invoice"
export const Cart = () => {
  const [approval] = useContext(Context) ?? []
  return approval ? <Invoice /> : <Checkout />
}
