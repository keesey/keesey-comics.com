// app/components/Navbar.tsx
"use client"
import type { AppRoute } from "next/dist/build/swc/types"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
export interface NavLinkProps {
  children: ReactNode
  href: LinkProps<AppRoute>["href"]
}
export const NavLink = ({ children, href }: NavLinkProps) => {
  const path = usePathname()
  return (
    <Link
      href={href}
      className={`text-md rounded-md px-3 py-2 font-medium ${
        href === path
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
      }`}
      aria-current={href === path ? "page" : undefined}
    >
      {children}
    </Link>
  )
}
