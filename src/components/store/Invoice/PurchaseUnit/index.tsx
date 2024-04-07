import { PurchaseUnit as Props } from "@paypal/paypal-js/types/apis/orders"
import { FC, Fragment } from "react"
import Price from "~/components/Price"
import styles from "./index.module.scss"
import PurchaseItem from "./PurchaseItem"
const BREAKDOWN_KEYS: ReadonlyArray<keyof NonNullable<Props["amount"]["breakdown"]>> = [
    "item_total",
    "tax_total",
    "shipping",
    "shipping_discount",
    "insurance",
    "handling",
    "discount",
]
const PurchaseUnit: FC<Props> = ({ amount, description, items, shipping }) => {
    return (
        <section className={styles.main}>
            <header key="header">
                <h2>{description || "Purchase Unit"}</h2>
            </header>
            <section className={styles.breakdown} key="breakdown">
                <dl>
                    {BREAKDOWN_KEYS.filter(key => Number(amount.breakdown?.[key]?.value)).map(key => (
                        <Fragment key={key}>
                            <dt>{key.replace("_", " ")}</dt>
                            <dd>
                                <Price amount={Number(amount.breakdown![key]!.value)} />
                            </dd>
                        </Fragment>
                    ))}
                    <Fragment key="total">
                        <dt className={styles.total}>Total</dt>
                        <dd className={styles.total}>
                            <Price amount={Number(amount.value)} />
                        </dd>
                    </Fragment>
                </dl>
            </section>
            {shipping && (
                <section key="shipping" className={styles.section}>
                    <h3>Shipping Destination</h3>
                    {shipping.name?.full_name && <div className={styles.name}>{shipping.name.full_name}</div>}
                    {shipping.address?.address_line_1 && <div>{shipping.address?.address_line_1}</div>}
                    {shipping.address?.address_line_2 && <div>{shipping.address?.address_line_2}</div>}
                    <div>
                        {[
                            shipping.address?.admin_area_2,
                            shipping.address?.admin_area_1,
                            shipping.address?.country_code,
                        ]
                            .filter(Boolean)
                            .join(", ")}{" "}
                        {shipping.address?.postal_code}
                    </div>
                </section>
            )}
            {Boolean(items?.length) && (
                <section key="items" className={styles.section}>
                    <h3>Items Included</h3>
                    {items!.map(item => (
                        <PurchaseItem key={item.name} {...item} />
                    ))}
                </section>
            )}
        </section>
    )
}
export default PurchaseUnit
