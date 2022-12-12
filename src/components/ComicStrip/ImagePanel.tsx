/* eslint-disable @next/next/no-img-element */
import { FC } from "react"
import useThemedClassName from "~/themes/useThemedClassName"
import styles from "./ImagePanel.module.scss"
export interface Props {
    alt?: string
    height: number
    src: string
    width: number
}
const ImagePanel: FC<Props> = props => {
    const className = useThemedClassName(styles, "cell")
    return (
        <section className={className}>
            <img alt={props.alt ?? ""} className={styles.image} {...props} />
        </section>
    )
}
ImagePanel.defaultProps = {
    alt: "Comic Panel",
}
export default ImagePanel
