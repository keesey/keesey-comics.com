import { FC, ReactNode } from "react"
import styles from "./index.module.scss"
export interface Props {
    description: ReactNode
    price: number
    title: ReactNode
}
const ProductType: FC<Props> = ({ children, description, price, title }) => (
    <section className={styles.main}>
        <h2>{title} (<abbr title="United States Dollars">$</abbr>{price.toFixed(2).replace(/\.00$/, "")})</h2>
        <p>{description}</p>
        <div className={styles.products}>
            {children}
        </div>
    </section>
)
export default ProductType
