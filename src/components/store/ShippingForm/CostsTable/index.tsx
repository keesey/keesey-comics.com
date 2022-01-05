import { useContext, VFC } from "react"
import Context from "~/cart/context/costs/Context"
import Price from "~/components/Price"
import styles from "./index.module.scss"
const CostsTable: VFC = () => {
    const { error, costs, pending } = useContext(Context) ?? {}
    if (pending) {
        return <p className={styles.pending}>Loading&hellip;</p>
    }
    if (error) {
        return <p className={styles.error}>{error.name}: {error.message}</p>
    }
    if (costs) {
        const shippingAndHandling = costs.shipping + costs.shippingAdditional + costs.handling + costs.containers
        return (
            <dl className={styles.main}>
                <dt>Subtotal</dt>
                <dd><Price amount={costs.products} /></dd>
                <dt>Shipping <abbr title="and">&amp;</abbr> Handling</dt>
                <dd><Price amount={shippingAndHandling} /></dd>
                <dt>Processing</dt>
                <dd><Price amount={costs.processing} /></dd>
                <dt className={styles.total}>Total</dt>
                <dd className={styles.total}><Price amount={costs.products + shippingAndHandling + costs.processing} /></dd>
            </dl>
        )
    }
    return null
}
export default CostsTable
