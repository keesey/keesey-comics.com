import { FC, PropsWithChildren } from "react"
import styles from "./index.module.scss"
const ProductTypes: FC<PropsWithChildren> = ({ children }) => <section className={styles.main}>{children}</section>
export default ProductTypes
