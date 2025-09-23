import clsx from "clsx"
import type {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react"
export type CTAProps = PropsWithChildren &
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    level?: 1 | 2
    size?: "xs" | "sm" | "md" | "lg" | "xl"
  }
export const CTA = ({
  children,
  className,
  level = 1,
  size = "xl",
  ...props
}: CTAProps) => (
  <button
    className={clsx(
      "p8 w-48 cursor-pointer rounded-2xl py-2 text-center transition-transform hover:scale-105",
      level === 1 &&
        "bg-blue-900 font-bold text-white dark:bg-white dark:text-black",
      level === 2 &&
        "border-1 bg-gray-100 font-semibold text-black dark:bg-gray-900 dark:text-white",
      `text-${size}`,
      className,
    )}
    {...props}
  >
    {children}
  </button>
)
