import Link from "next/link"
import { CartButton } from "./CartButton"
import { Logo } from "./Logo"
import { NAV_LINKS } from "./NAV_LINKS"
import { NavLink } from "./NavLink"
import { Menu } from "./menu/Menu"
import { MenuButton } from "./menu/MenuButton"
import { MenuProvider } from "./menu/MenuProvider"
import { SocialButtons } from "./SocialButtons"
export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow dark:bg-gray-800">
      <MenuProvider>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-24 items-center justify-between">
            <Link href="/" className="transition-transform hover:scale-110">
              <Logo />
            </Link>
            <div className="hidden items-center space-x-4 md:flex">
              {NAV_LINKS.map(link => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>
            <div className="flex space-x-4">
              <SocialButtons />
              <CartButton />
              <MenuButton />
            </div>
          </div>
        </div>
        <Menu />
      </MenuProvider>
    </nav>
  )
}
