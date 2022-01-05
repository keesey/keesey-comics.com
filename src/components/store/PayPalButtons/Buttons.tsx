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
    return (
        <section className={styles.main}>
            <PayPalButtons
                disabled={isPending}
                forceReRender={[order, costs]}
                createOrder={createOrder}
                onApprove={onApprove}
                onError={alert}
                onCancel={alert}
            />
        </section>
    );
};
export default Buttons;
