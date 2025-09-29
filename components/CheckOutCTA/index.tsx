"use client"
import { Context } from "@/lib/cart/context/order/Context"
import Link from "next/link"
import { type FC, useContext } from "react"
import { CTA, type CTAProps } from "../CTA"
export type Props = CTAProps
export const CheckOutCTA: FC<CTAProps> = ({ children, ...ctaProps }: Props) => {
  const [order] = useContext(Context) ?? []
  if (!order?.items.length) {
    return null
  }
  return (
    <Link href="/cart">
      <CTA {...ctaProps}>{children ?? "Check Out"}</CTA>
    </Link>
  )
}
