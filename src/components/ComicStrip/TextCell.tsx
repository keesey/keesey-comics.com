import { FC } from "react"
import useTheme from "~/themes/useTheme"
import ComicText from "../ComicText"
import styles from "./TextCell.module.scss"
export interface Props {
    children: string;
}
const AVERAGE_CHARACTER_WIDTH_IN_EMS = 0.8;
const IDEAL_LINE_NUMBER = 5;
const getWidthForText = (text: string) => `${AVERAGE_CHARACTER_WIDTH_IN_EMS * text.length / IDEAL_LINE_NUMBER}rem`;
const TextCell: FC<Props> = ({ children }) => {
    const theme = useTheme()
    return (
        <section className={`${styles.cell} ${styles[`theme-${theme}`]}`} style={{ width: getWidthForText(children) }}>
            <ComicText>{children}</ComicText>
        </section>
    )
}
export default TextCell
