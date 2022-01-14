/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { VFC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./Footer.module.scss"
import Promos, { Props as PromosProps } from "./Promos"
export type Props = PromosProps
const Footer: VFC<Props> = ({ promos }) => {
    const className = useThemedClassName(styles, "footer")
    return (
        <footer className={className}>
            <nav className={styles.nav}>
                <div key="copyright">
                    <abbr title="Copyright">©</abbr> 2022{" "}
                    <Link href="/contact">
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
