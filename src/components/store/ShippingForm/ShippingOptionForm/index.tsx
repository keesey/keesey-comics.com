import { ChangeEvent, useCallback, useContext, VFC } from "react"
import { SHIPPING_OPTION_LISTS } from "~/cart/constants/SHIPPING_OPTIONS"
import Context from "~/cart/context/order/Context"
import styles from "./index.module.scss"
const ShippingOptionForm: VFC = () => {
    const [order, dispatch] = useContext(Context) ?? []
    const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget.checked) {
                dispatch?.({
                    type: "SELECT_SHIPPING_OPTION",
                    payload: { shippingOptionId: event.currentTarget.value },
                })
            }
        },
        [dispatch],
    )
    if (!order?.shippingOptionIds?.length) {
        return null
    }
    return (
        <section className={styles.main}>
            {SHIPPING_OPTION_LISTS.filter(list =>
                list.options.some(option => order.shippingOptionIds.includes(option.id)),
            ).map(list => (
                <section key={list.name} className={styles.optionList}>
                    <h3>Options: {list.name}</h3>
                    <div className={styles.options}>
                        {list.options.map(option => (
                            <label key={option.id} className={styles.label}>
                                <span>{option.name}</span>
                                <input
                                    type="radio"
                                    value={option.id}
                                    name={list.name}
                                    checked={order.shippingOptionIds.includes(option.id)}
                                    onChange={handleInputChange}
                                />
                            </label>
                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}
export default ShippingOptionForm
