import { FC, PropsWithChildren, ReactNode } from "react"
import Price from "~/components/Price"
import styles from "./index.module.scss"
export interface Props extends PropsWithChildren {
    description: ReactNode
    price: number
    title: ReactNode
}
const ProductType: FC<Props> = ({ children, description, price, title }) => (
    <section className={styles.main}>
        <h2>
            {title} (<Price amount={price} abbreviate />)
        </h2>
        <p>{description}</p>
        <div className={styles.products}>{children}</div>
    </section>
)
export default ProductType
