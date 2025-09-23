import type { AppRoute } from "next/dist/build/swc/types"
import type { LinkProps } from "next/link"
export type NavLink = Readonly<{
  href: LinkProps<AppRoute>["href"] & string
  name: string
}>
export const NAV_LINKS: readonly NavLink[] = [
  { name: "Store", href: "/store" },
  { name: "Comics", href: "/comics" },
  { name: "Creators", href: "/creators" },
  { name: "Newsletter", href: "/newsletter" },
  { name: "Contact", href: "/contact" },
]
