import type { PropsWithChildren } from "react"
export type TextPassageProps = PropsWithChildren
export const TextPassage = ({ children }: TextPassageProps) => (
  <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 text-justify">
    {children}
  </div>
)
