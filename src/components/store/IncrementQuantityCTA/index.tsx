import Link from "next/link"
import { FC, PropsWithChildren } from "react"
import useQuantityIncrementer from "~/cart/hooks/useQuantitytIncrementer"
import CTA from "~/components/CTA"
export interface Props extends PropsWithChildren {
    href?: string
    productIds: readonly string[]
}
const IncrementQuantityCTA: FC<Props> = ({ children, href, productIds }) => {
    const handleClick = useQuantityIncrementer(productIds)
    children = children ?? (href ? (productIds.length > 1 ? "Get them all!" : "Get it now!") : "Add to Cart")
    if (href) {
        return (
            <Link href={href} legacyBehavior passHref>
                <CTA onClickCapture={handleClick}>{children}</CTA>
            </Link>
        )
    }
    return <CTA onClick={handleClick}>{children}</CTA>
}
export default IncrementQuantityCTA
