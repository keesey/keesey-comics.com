import { FC, PropsWithChildren } from "react"
import styles from "./index.module.scss"
export type Props = PropsWithChildren<{}>
const Container: FC<Props> = ({ children }) => {
    return <div className={styles.main}>{children}</div>
}
export default Container
