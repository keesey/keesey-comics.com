"use client"
import { useQuantityIncrementer } from "@/lib/cart/hooks/useQuantityIncrementer"
import type { AppRoute } from "next/dist/build/swc/types"
import Link, { type LinkProps } from "next/link"
import type { PropsWithChildren } from "react"
import { CTA, type CTAProps } from "../CTA"
export interface AddToCartCTAProps extends PropsWithChildren, CTAProps {
  href?: LinkProps<AppRoute>["href"]
  productIds: readonly string[]
}
export const AddToCartCTA = ({
  children = "Add to Cart",
  href,
  productIds,
  ...ctaProps
}: AddToCartCTAProps) => {
  const handleClick = useQuantityIncrementer(productIds)
  if (!href) {
    return (
      <CTA {...ctaProps} onClick={handleClick}>
        {children}
      </CTA>
    )
  }
  return (
    <Link href={href}>
      <CTA {...ctaProps} onClickCapture={handleClick}>
        {children}
      </CTA>
    </Link>
  )
}
