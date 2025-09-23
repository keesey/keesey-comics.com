import type { PropsWithChildren, ReactNode } from "react"
export interface QuoteProps extends PropsWithChildren {
  attribution: ReactNode
  cite?: string | URL
}
export const Quote = ({ attribution, children, cite }: QuoteProps) => (
  <div>
    <blockquote cite={cite?.toString()} className="text-lg font-medium">
      “{children}”
    </blockquote>
    {cite ? (
      <a className="block text-right font-light" href={cite.toString()}>
        &mdash;{attribution}
      </a>
    ) : (
      <div className="block text-right font-light">&mdash;{attribution}</div>
    )}
  </div>
)
