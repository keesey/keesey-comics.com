import Link from "next/link";
import { FC } from "react";
import useQuantityIncrementer from "~/cart/hooks/useQuantitytIncrementer";
import CTA from "~/components/CTA";
export interface Props {
    href?: string;
    productId: string;
}
const IncrementQuantityCTA: FC<Props> = ({ children, href, productId }) => {
    const handleClick = useQuantityIncrementer(productId);
    children = children ?? (href ? "Get it now!" : "Add to Cart")
    if (href) {
        return (
            <Link href={href} passHref>
                <CTA onClickCapture={handleClick}>{children}</CTA>
            </Link>
        );
    }
    return <CTA onClick={handleClick}>{children}</CTA>;
};
export default IncrementQuantityCTA;
