import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js"
import { FC, useCallback, useContext, useState } from "react"
import CostsContext from "~/cart/context/costs/Context"
import OrderContext from "~/cart/context/order/Context"
import styles from "./Buttons.module.scss"
import useCreateOrder from "./useCreateOrder"
import useOnApprove from "./useOnApprove"
const Buttons: FC = () => {
    const [{ isPending, isRejected }] = usePayPalScriptReducer() ?? [{}]
    const [order] = useContext(OrderContext) ?? []
    const { costs } = useContext(CostsContext) ?? {}
    const createOrder = useCreateOrder()
    const handleApprove = useOnApprove()
    const [error, setError] = useState<string | undefined>()
    const handleError = useCallback((error: unknown) => {
        setError(String(error) || undefined)
    }, [])
    const disabled = Boolean(!costs || isPending)
    return (
        <section className={styles.main}>
            <h2>3. Finalize Purchase</h2>
            {/* :TODO: check onShippingChange to make sure destination matches */}
            <PayPalButtons
                className={disabled ? styles.disabled : undefined}
                createOrder={createOrder}
                disabled={disabled}
                forceReRender={[order, costs]}
                key="buttons"
                onApprove={handleApprove}
                onError={handleError}
            />
            {isRejected && (
                <div key="error" className={styles.error}>
                    {error || "Error!"}
                </div>
            )}
        </section>
    )
}
export default Buttons
