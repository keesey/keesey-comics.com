import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import ComicText from "../ComicText"
import styles from "./index.module.scss"
export type Props = Exclude<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "className" | "role"> & {
    children: string
}
const CTA = forwardRef<HTMLAnchorElement, Props>(
    function CTA({ children, ...elementProps }, ref) {
        const className = useThemedClassName(styles, "cta");
        return (
            <a {...elementProps} className={className} role="button" ref={ref}>
                <ComicText>{children}</ComicText>
            </a>
        )
    },
)
export default CTA
