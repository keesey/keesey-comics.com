import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useContext, VFC } from "react";
import CostsContext from "~/cart/context/costs/Context";
import OrderContext from "~/cart/context/order/Context";
import useCreateOrder from "./useCreateOrder";
import useOnApprove from "./useOnApprove";
import styles from "./Buttons.module.scss";
const Buttons: VFC = () => {
    const [{ isPending }] = usePayPalScriptReducer() ?? [{}];
    const [order] = useContext(OrderContext) ?? [];
    const { costs } = useContext(CostsContext) ?? {};
    const createOrder = useCreateOrder();
    const onApprove = useOnApprove();
    const disabled = Boolean(!costs || isPending);
    return (
        <section className={styles.main}>
            <h2>3. Finalize Purchase</h2>
            <PayPalButtons
                className={disabled ? styles.disabled : undefined}
                createOrder={createOrder}
                disabled={disabled}
                forceReRender={[order, costs]}
                onApprove={onApprove}
                onCancel={alert}
                onError={alert}
            />
        </section>
    );
};
export default Buttons;
