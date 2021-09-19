/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import styles from "./index.module.scss"
export interface Props {
    phase: "ending_soon" | "just_funded" | "just_launched" | "nearly_funded"
    url: string
}
const ALT_TEXT: Readonly<Record<Props["phase"], string>> = {
    ending_soon: "Ending Soon",
    just_funded: "Just Funded",
    just_launched: "Just Launched",
    nearly_funded: "Nearly Funded",
}
const Kickstarter: VFC<Props> = ({ phase, url }) => (
    <aside className={styles.container}>
        <a className={styles.banner} href={url} role="button">
            <img
                alt={`Kickstarter Campaign ${ALT_TEXT[phase]}`}
                src={`/banners/kickstarter/${phase}.png`}
                height={196}
                width={1080}
            />
        </a>
    </aside>
)
export default Kickstarter
