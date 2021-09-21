/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import ComicText from "~/components/ComicText"
import useThemedClassName from "~/themes/useThemedClassName"
import IssuePromo from "../IssuePromo"
import styles from "./index.module.scss"
export interface Props {
    children?: string;
    id: "paleocene" | "pleistocene"
    numbers: readonly number[];
}
const IssuePromos: FC<Props> = ({ children, id, numbers }) => {
    const className = useThemedClassName(styles, "promos");
    return (
        <section className={className}>
            {children && <p key="text"><ComicText>{children}</ComicText></p>}
            <nav key="nav">
                {
                    numbers.map((number) => <IssuePromo id={id} key={number} number={number} />)
                }
            </nav>
        </section>
    )
}
export default IssuePromos;
