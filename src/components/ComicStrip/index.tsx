import { FC, PropsWithChildren } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./index.module.scss"
const ComicStrip: FC<PropsWithChildren> = ({ children }) => {
    const className = useThemedClassName(styles, "strip")
    return <section className={className}>{children}</section>
}
export default ComicStrip
