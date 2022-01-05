import { useContext, VFC } from "react";
import AddressContext from "~/cart/context/address/Context";
import OrderContext from "~/cart/context/order/Context";
import AddressForm from "./AddressForm";
import CostsTable from "./CostsTable";
import styles from "./index.module.scss";
import ShippingOptionForm from "./ShippingOptionForm";
const ShippingForm: VFC = () => {
    const [order] = useContext(OrderContext) ?? []
    const [address] = useContext(AddressContext) ?? [];
    if (!address || !order?.items.length) {
        return null;
    }
    return (
        <section className={styles.main}>
            <h2>Calculate Shipping</h2>
            <AddressForm />
            <ShippingOptionForm />
            <CostsTable />
        </section>
    );
};
export default ShippingForm;
