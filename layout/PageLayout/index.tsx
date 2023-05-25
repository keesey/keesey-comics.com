"use client"
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav"
import FooterNav from "layout/FooterNav"
import HeaderNav from "layout/HeaderNav"
import { PropsWithChildren } from "react"
export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <>
            <HeaderNav />
            <SkipNavLink />
            <SkipNavContent as="main">{children}</SkipNavContent>
            <FooterNav />
        </>
    )
}
