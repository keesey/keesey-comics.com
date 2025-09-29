import type { ReactNode } from "react"
import { FaChevronRight } from "react-icons/fa6"
import { TextLink } from "../TextLink"
import clsx from "clsx"
import type { AppRoute } from "next/dist/build/swc/types"
import type { LinkProps } from "next/link"

export type Crumb = Readonly<{
  label: ReactNode
  href?: LinkProps<AppRoute>["href"]
}>

export interface BreadcrumbsProps {
  className?: string
  crumbs: readonly Crumb[]
}

export const Breadcrumbs = ({
  crumbs: items,
  className = "",
}: BreadcrumbsProps) => {
  if (!items?.length) return null
  return (
    <nav
      aria-label="Breadcrumbs"
      className={clsx("mx-auto my-4 max-w-7xl px-4", className)}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li
              key={item.href ? `href:${item.href}` : `index:${index}`}
              className="flex items-center"
            >
              {item.href ? (
                <TextLink href={item.href}>{item.label}</TextLink>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "font-semibold" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!isLast && <FaChevronRight className="mx-2 opacity-60" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
