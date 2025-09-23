import type { Crumb } from "@/components/Breadcrumbs"
import { AppRoute } from "next/dist/build/swc/types"
import { LinkProps } from "next/link"
import type { ReactNode } from "react"
export const createCrumbsForIssue = (
  title: ReactNode,
  comicsHRef: LinkProps<AppRoute>["href"],
  issueIndex: number,
): readonly Crumb[] => {
  return [
    { label: "Home", href: "/" },
    { label: "Comics", href: "/comics" },
    {
      label: <cite>{title}</cite>,
      href: comicsHRef,
    },
    { label: <cite>Issue #{issueIndex}</cite> },
  ]
}
