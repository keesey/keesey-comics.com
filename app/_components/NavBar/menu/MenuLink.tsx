"use client"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import { useContext, type ReactNode } from "react"
import { MenuContext } from "./MenuProvider"
import type { AppRoute } from "next/dist/build/swc/types"
export interface MenuLinkProps {
  children: ReactNode
  href: LinkProps<AppRoute>["href"]
}
export const MenuLink = ({ children, href }: MenuLinkProps) => {
  const path = usePathname()
  const { setIsOpen } = useContext(MenuContext) ?? {}
  return (
    <Link
      aria-current={href === path ? "page" : undefined}
      className={`block rounded-md px-3 py-2 text-base font-medium ${
        href !== path
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
      }`}
      href={href}
      onClick={setIsOpen ? () => setIsOpen(false) : undefined}
    >
      {children}
    </Link>
  )
}
