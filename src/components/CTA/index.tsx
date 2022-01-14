import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef, PropsWithChildren } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import ComicText from "../ComicText"
import styles from "./index.module.scss"
export type Props = Exclude<
    DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    "className" | "role"
>
const CTA = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(function CTA({ children, ...elementProps }, ref) {
    const className = useThemedClassName(styles, "cta")
    return (
        <a {...elementProps} className={className} role="button" ref={ref}>
            {typeof children === "string" ? <ComicText>{children}</ComicText> : children}
        </a>
    )
})
export default CTA
