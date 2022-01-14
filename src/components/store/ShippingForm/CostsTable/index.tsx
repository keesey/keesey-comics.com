import "animate.css"
import { useContext, VFC } from "react"
import Context from "~/cart/context/costs/Context"
import Price from "~/components/Price"
import styles from "./index.module.scss"
const CostsTable: VFC = () => {
    const context = useContext(Context)
    if (!context) {
        return null
    }
    const { error, costs, pending } = context
    return (
        <div className={styles.main}>
            <div className={styles.status}>
                {pending && (
                    <p className={`${styles.pending} animate__animated animate__headShake animate__infinite`}>
                        Loading&hellip;
                    </p>
                )}
                {error && (
                    <p className={styles.error}>
                        {error.name}: {error.message}
                    </p>
                )}
            </div>
            <dl className={styles.list}>
                <dt>Subtotal</dt>
                <dd>{costs ? <Price amount={costs.products} /> : "--"}</dd>
                <dt>Sales Tax</dt>
                <dd>{costs ? <Price amount={costs.salesTax} /> : "--"}</dd>
                <dt>
                    Shipping <abbr title="and">&amp;</abbr> Handling
                </dt>
                <dd>
                    {costs ? (
                        <Price amount={costs.containers + costs.handling + costs.shipping + costs.shippingAdditional} />
                    ) : (
                        "--"
                    )}
                </dd>
                <dt>Processing</dt>
                <dd>{costs ? <Price amount={costs.processing} /> : "--"}</dd>
                <dt className={styles.total}>Total</dt>
                <dd className={costs ? styles.total : undefined}>
                    {costs ? (
                        <Price
                            amount={
                                costs.containers +
                                costs.handling +
                                costs.processing +
                                costs.products +
                                costs.salesTax +
                                costs.shipping +
                                costs.shippingAdditional
                            }
                        />
                    ) : (
                        "--"
                    )}
                </dd>
            </dl>
        </div>
    )
}
export default CostsTable
