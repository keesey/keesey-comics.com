/* eslint-disable @next/next/no-img-element */
import { FC, PropsWithChildren } from "react"
import Logo from "~/components/Logo"
import styles from "./index.module.scss"
export interface Props extends PropsWithChildren {
    url: string
}
const Kickstarter: FC<Props> = ({ children, url }) => (
    <a className={styles.container} href={url} role="button">
        <aside className={styles.banner}>
            <span className={styles.phase}>{children}</span>
            <cite>
                <Logo color="white" type="paleocene" height={48} width={133} />
                #3
            </cite>
            <Logo color="white" type="kickstarter" height={32} width={302} />
        </aside>
    </a>
)
export default Kickstarter
