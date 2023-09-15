import { FC, ReactNode } from "react"
import styles from "./index.module.scss"
import Image from "next/image"
export interface Props {
    altText?: string
    caption?: ReactNode
    image: Readonly<{
        height: number
        source: string
        width: number
    }>
    onClose?: () => void
}
const Lightbox: FC<Props> = ({ altText, caption, image, onClose }) => {
    return (
        <div className={styles.main}>
            <div className={styles.back} onClick={() => onClose?.()}>
                <button className={styles.close}>&times;</button>
            </div>
            <figure className={styles.figure}>
                <Image
                    className={styles.image}
                    src={image.source}
                    width={image.width}
                    height={image.height}
                    alt={altText ?? ""}
                />
                {caption && (
                    <figcaption className={styles.caption} style={{ width: image.width }}>
                        {caption}
                    </figcaption>
                )}
            </figure>
        </div>
    )
}
export default Lightbox
