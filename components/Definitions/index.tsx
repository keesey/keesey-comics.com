import clsx from "clsx"
import type { PropsWithChildren } from "react"
export type DefinitionsProps = PropsWithChildren & { className?: string }
export const Definitions = ({ children, className }: DefinitionsProps) => (
  <dl className={clsx("grid grid-cols-2 gap-x-4", className)}>{children}</dl>
)
export const DefinitionTerm = ({ children, className }: DefinitionsProps) => (
  <dt className={clsx("text-right font-light", className)}>{children}</dt>
)
export const Definition = ({ children, className }: DefinitionsProps) => (
  <dd className={clsx("text-left font-medium", className)}>{children}</dd>
)
