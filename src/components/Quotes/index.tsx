import { ReactNode, VFC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./index.module.scss"
export type Quote = Readonly<{
    attribution: ReactNode;
    content: ReactNode;
    href: string;
}>
export type Props = {
    quotes: readonly Quote[];
}
const Quotes: VFC<Props> = ({ quotes }) => {
    const className = useThemedClassName(styles, "quote")
    return (
        <aside className={className}>
            {quotes.map(({ attribution, content, href }) => (
                <blockquote key={href} cite={href}>
                    <p>{content}</p>
                    <footer>
                        <cite className={styles.attribution}>
                            <a href={href} target="_blank" rel="noreferrer">{attribution}</a>
                        </cite>
                    </footer>
                </blockquote>
            ))}
        </aside>
    )
}
export default Quotes
