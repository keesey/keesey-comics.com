import { FC } from "react"
import styles from "./index.module.scss"
const ProductTypes: FC = ({ children }) => <section className={styles.main}>{children}</section>
export default ProductTypes
