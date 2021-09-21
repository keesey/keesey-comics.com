import { FC } from "react";
import useThemedClassName from "~/themes/useThemedClassName";
import ComicText from "../ComicText";
import styles from "./TextPanel.module.scss";
export interface Props {
    emphatic?: boolean;
}
const AVERAGE_CHARACTER_WIDTH_IN_EMS = 0.75;
const IDEAL_LINE_NUMBER = 5;
const getWidthForText = (text: string) => `${AVERAGE_CHARACTER_WIDTH_IN_EMS * text.length / IDEAL_LINE_NUMBER}rem`;
const TextPanel: FC<Props> = ({ children, emphatic }) => {
    const className = useThemedClassName(styles, "cell");
    if (typeof children === "string") {
        return (
            <section className={className} style={{ width: getWidthForText(children) }}>
                <ComicText emphatic={emphatic}>{children}</ComicText>
            </section>
        )
    }
    return (
        <section className={`${className} ${styles.complex}${emphatic ? ` ${styles.emphatic}` : ""}`}>
            {children}
        </section>
    )
}
export default TextPanel
