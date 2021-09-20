/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import ComicText from "~/components/ComicText"
import useThemedClassName from "~/themes/useThemedClassName"
import IssuePromo from "../IssuePromo"
import styles from "./index.module.scss"
export interface Props {
    children?: string;
    id: "paleocene" | "pleistocene"
    first: number;
    last: number;
}
const IssuePromos: FC<Props> = ({ children, id, first, last }) => {
    const className = useThemedClassName(styles, "promos");
    return (
        <section className={className}>
            {children && <p><ComicText>{children}</ComicText></p>}
            <nav>
                {
                    new Array(last)
                        .fill(0)
                        .map((_, index) => index + 1)
                        .slice(first - 1)
                        .map((number) => <IssuePromo id={id} key={number} number={number} />)
                }
            </nav>
        </section>
    )
}
export default IssuePromos;
