/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./Footer.module.scss"
import Promos, { Props as PromosProps } from "./Promos"
export type Props = PromosProps
const YEAR = new Date().getFullYear()
const Footer: FC<Props> = ({ promos }) => {
    const className = useThemedClassName(styles, "footer")
    return (
        <footer className={className}>
            <nav className={styles.nav}>
                <div key="copyright">
                    <abbr title="Copyright">©</abbr> {YEAR}{" "}
                    <Link href="/contact" legacyBehavior>
                        <a title="Contact the Creator">T. Michael Keesey</a>
                    </Link>{" "}
                    • All Rights Reserved
                </div>
                <Promos promos={promos} />
            </nav>
        </footer>
    )
}
Footer.defaultProps = {
    promos: ["phylopic"],
}
export default Footer
