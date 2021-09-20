import { FC } from "react";
import useThemedClassName from "~/themes/useThemedClassName";
import ComicText from "../ComicText";
import styles from "./TextPanel.module.scss";
export interface Props {
    children: string;
    italic?: boolean;
}
const AVERAGE_CHARACTER_WIDTH_IN_EMS = 0.75;
const IDEAL_LINE_NUMBER = 5;
const getWidthForText = (text: string) => `${AVERAGE_CHARACTER_WIDTH_IN_EMS * text.length / IDEAL_LINE_NUMBER}rem`;
const TextPanel: FC<Props> = ({ children, italic }) => {
    const className = useThemedClassName(styles, "cell");
    return (
        <section className={className} style={{ width: getWidthForText(children) }}>
            <ComicText italic={italic}>{children}</ComicText>
        </section>
    )
}
export default TextPanel