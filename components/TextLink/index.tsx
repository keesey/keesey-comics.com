import clsx from "clsx"
import { AppRoute } from "next/dist/build/swc/types"
import Link, { LinkProps } from "next/link"
import type {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react"
export type TextLinkProps = PropsWithChildren &
  (
    | ({ isExternal: true } & DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >)
    | ({ isExternal?: false } & LinkProps<AppRoute>)
  )
export const TextLink = ({ children, ...props }: TextLinkProps) => {
  if (props.isExternal) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isExternal, className, ...anchorProps } = props
    return (
      <a
        className={clsx(
          "underline underline-offset-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400",
          className,
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...anchorProps}
      >
        {children}
      </a>
    )
  }
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isExternal, className, ...linkProps } = props
    return (
      <Link
        className={clsx(
          "underline underline-offset-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400",
          className,
        )}
        {...linkProps}
      >
        {children}
      </Link>
    )
  }
}
