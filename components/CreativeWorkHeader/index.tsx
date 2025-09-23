import type { AppRoute } from "next/dist/build/swc/types"
import type { LinkProps } from "next/link"
import { type PropsWithChildren } from "react"
import type { CreativeWork, Person } from "schema-dts"
import { TextLink } from "../TextLink"
export interface CreativeWorkHeaderProps {
  abstractHTML?: string
  creator: Person
  subject: CreativeWork
}
export const CreativeWorkHeader = ({
  abstractHTML,
  creator,
  subject,
}: CreativeWorkHeaderProps) => {
  if (
    typeof subject !== "string" &&
    typeof subject.name !== "string" &&
    typeof subject.abstract !== "string" &&
    typeof creator !== "string" &&
    typeof creator.name !== "string" &&
    !abstractHTML
  ) {
    return null
  }
  return (
    <header className="flex flex-col gap-8">
      <div className="text-center">
        <Title>
          {typeof subject === "string"
            ? subject
            : typeof subject.name === "string"
              ? subject.name
              : null}
        </Title>
        <Byline
          href={
            (typeof creator !== "string" &&
              (new URL(creator.url?.toString() ?? "")
                .pathname as LinkProps<AppRoute>["href"])) ||
            undefined
          }
        >
          {typeof creator === "string"
            ? creator
            : typeof creator.name === "string"
              ? creator.name
              : null}
        </Byline>
      </div>
      <Abstract html={abstractHTML}>
        {abstractHTML
          ? null
          : typeof subject === "string"
            ? null
            : typeof subject.abstract === "string"
              ? subject.abstract
              : null}
      </Abstract>
    </header>
  )
}

export const Title = ({ children }: PropsWithChildren) => {
  if (!children) {
    return null
  }
  return (
    <h1 className="mx-auto px-4 text-3xl font-bold md:px-0">
      <cite>{children}</cite>
    </h1>
  )
}

export interface BylineProps extends PropsWithChildren {
  href?: LinkProps<AppRoute>["href"]
}
export const Byline = ({ children, href }: BylineProps) => {
  if (!children) {
    return null
  }
  if (!href) {
    return <h2 className="mx-auto px-4 text-lg md:px-0">by {children}</h2>
  }
  return (
    <h2 className="mx-auto text-lg">
      by <TextLink href={href}>{children}</TextLink>
    </h2>
  )
}

export interface AbstractProps extends PropsWithChildren {
  html?: string
}
export const Abstract = ({ children, html }: AbstractProps) => {
  if (!children && !html) {
    return null
  }
  return (
    <p
      className="mx-auto max-w-xl px-4 text-justify md:px-0"
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    >
      {children}
    </p>
  )
}
