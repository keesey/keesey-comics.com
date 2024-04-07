import { FC, ReactNode } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./index.module.scss"
export type Quote = Readonly<{
    attribution: ReactNode
    content: ReactNode
    href?: string
    id: string
}>
export type Props = {
    quotes: readonly Quote[]
}
const Quotes: FC<Props> = ({ quotes }) => {
    const className = useThemedClassName(styles, "quote")
    return (
        <aside className={className}>
            {quotes.map(({ attribution, content, href, id }) => (
                <blockquote key={id} cite={href}>
                    <p>{content}</p>
                    <footer>
                        <cite className={styles.attribution}>
                            {href ? (
                                <a href={href} target="_blank" rel="noreferrer">
                                    {attribution}
                                </a>
                            ) : (
                                attribution
                            )}
                        </cite>
                    </footer>
                </blockquote>
            ))}
        </aside>
    )
}
export default Quotes
