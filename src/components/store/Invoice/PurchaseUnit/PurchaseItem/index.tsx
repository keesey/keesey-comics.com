import { PurchaseUnitItem as Props } from "@paypal/paypal-js/types/apis/orders"
import { FC } from "react"
import Price from "~/components/Price"
import styles from "./index.module.scss"
const PurchaseItem: FC<Props> = ({ name, quantity, unit_amount, description, sku, tax }) => {
    return (
        <section className={styles.main}>
            <header key="header">
                <h4>
                    {quantity} &times; {name}
                </h4>
                {description && <p key="description">{description}</p>}
            </header>
            <dl key="details">
                {sku && (
                    <>
                        <dt>Product ID</dt>
                        <dd>{sku}</dd>
                    </>
                )}
                <dt>Unit Amount</dt>
                <dd>
                    <Price amount={Number(unit_amount.value)} />
                </dd>
                {tax && (
                    <>
                        <dt>Tax</dt>
                        <dd>
                            <Price amount={Number(tax.value)} />
                        </dd>
                    </>
                )}
            </dl>
        </section>
    )
}
export default PurchaseItem
