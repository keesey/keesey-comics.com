/* eslint-disable @next/next/no-img-element */
import { VFC } from "react"
import useTheme from "~/themes/useTheme"
import styles from "./ImageCell.module.scss"
export interface Props {
    alt?: string;
    height: number;
    src: string;
    width: number;
}
const ImageCell: VFC<Props> = ({ height, width, ...props }) => {
    const theme = useTheme()
    return (
        <section className={`${styles.cell} ${styles[`theme-${theme}`]}`} style={{ height, width }}>
            <img alt={props.alt ?? ""} className={styles.image} {...props} />
        </section>
    )
}
ImageCell.defaultProps = {
    alt: "Comic Panel",
}
export default ImageCell
