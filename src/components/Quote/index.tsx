import { FC, ReactNode } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./index.module.scss"
export type Props = {
    attribution: ReactNode;
    href: string;
}
const Quote: FC<Props> = ({ attribution, children, href }) => {
    const className = useThemedClassName(styles, "quote")
    return (
        <aside>
            <blockquote cite={href} className={className}>
                <p>{children}</p>
                <footer>
                    <cite className={styles.attribution}>
                        <a href={href} target="_blank" rel="noreferrer">{attribution}</a>
                    </cite>
                </footer>
            </blockquote>
        </aside>
    )
}
export default Quote
