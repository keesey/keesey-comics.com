/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import ComicText from "~/components/ComicText"
import Logo from "~/components/Logo"
import ThemeContext from "~/themes/ThemeContext"
import styles from "./index.module.scss"
export interface Props {
    phase: "ending_soon" | "just_funded" | "just_launched" | "nearly_funded"
    url: string
}
const TEXT: Readonly<Record<Props["phase"], string>> = {
    ending_soon: "Ending Soon",
    just_funded: "Just Funded",
    just_launched: "Just Launched",
    nearly_funded: "Nearly Funded",
}
const Kickstarter: VFC<Props> = ({ phase, url }) => (
    <a className={styles.container} href={url} role="button">
        <aside className={styles.banner}>
            <span className={styles.phase}>{TEXT[phase]}</span>
            <cite>
                <Logo color="white" type="paleocene" height={48} width={133} />
                #3
            </cite>
            <Logo color="white" type="kickstarter" height={32} width={302} />
        </aside>
    </a>
)
export default Kickstarter
