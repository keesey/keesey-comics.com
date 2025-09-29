"use client"
import { useContext } from "react"
import { NAV_LINKS } from "../NAV_LINKS"
import { MenuLink } from "./MenuLink"
import { MenuContext } from "./MenuProvider"
export const Menu = () => {
  const { isOpen } = useContext(MenuContext) ?? {}
  if (!isOpen) return null
  return (
    <div className="space-y-1 bg-white px-2 pt-2 pb-3 md:hidden dark:bg-gray-900">
      {NAV_LINKS.map(link => (
        <MenuLink key={link.href} href={link.href}>
          {link.name}
        </MenuLink>
      ))}
    </div>
  )
}
