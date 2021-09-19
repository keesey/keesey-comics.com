/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import useTheme from "~/themes/useTheme"
import styles from "./ImagePanel.module.scss"
export interface Props {
    alt?: string;
    height: number;
    src: string;
    width: number;
}
const ImagePanel: VFC<Props> = (props) => {
    const theme = useTheme()
    return (
        <section className={`${styles.cell} ${styles[`theme-${theme}`]}`}>
            <img alt={props.alt ?? ""} className={styles.image} {...props} />
        </section>
    )
}
ImagePanel.defaultProps = {
    alt: "Comic Panel",
}
export default ImagePanel
