"use client"
import { CTA } from "@/components/CTA"
import { useQuantityIncrementer } from "@/lib/cart/hooks/useQuantityIncrementer"
import type { AppRoute } from "next/dist/build/swc/types"
import Link, { type LinkProps } from "next/link"
import type { FC, PropsWithChildren } from "react"
export interface Props extends PropsWithChildren {
  href?: LinkProps<AppRoute>["href"]
  productIds: readonly string[]
}
export const IncrementQuantityCTA: FC<Props> = ({
  children,
  href,
  productIds,
}) => {
  const handleClick = useQuantityIncrementer(productIds)
  children =
    children ??
    (href
      ? productIds.length > 1
        ? "Get them all!"
        : "Get it now!"
      : "Add to Cart")
  if (href) {
    return (
      <Link href={href}>
        <CTA onClickCapture={handleClick}>{children}</CTA>
      </Link>
    )
  }
  return <CTA onClick={handleClick}>{children}</CTA>
}
