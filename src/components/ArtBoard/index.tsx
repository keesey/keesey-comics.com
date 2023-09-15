import Image from "next/image"
import { FC } from "react"
import { Board } from "~/models/Board"
import styles from "./index.module.scss"
export interface Props {
    board: Board
    imageSource: string
}
const ArtBoard: FC<Props> = ({ board, imageSource }) => {
    const width = board.count === 2 ? 178 : 90
    return (
        <figure className={styles.main}>
            <Image className={styles.image} src={imageSource} width={width} height={139} alt={board.name} />
            <figcaption className={styles.caption} style={{ maxWidth: width }}>
                <h3 className={styles.heading}>{board.name}</h3>
            </figcaption>
        </figure>
    )
}
export default ArtBoard
