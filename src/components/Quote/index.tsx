import { FC, ReactNode } from "react"
import styles from"./index.module.scss"
export type Props = {
    attribution: ReactNode;
    href: string;
}
const Quote: FC<Props> = ({ attribution, children, href }) => (
    <blockquote cite={href} className={styles.quote}>
        <p>{children}</p>
        <footer>
            <cite className={styles.attribution}>
                <a href={href} target="_blank" rel="noreferrer">{attribution}</a>
            </cite>
        </footer>
    </blockquote>
)
export default Quote
