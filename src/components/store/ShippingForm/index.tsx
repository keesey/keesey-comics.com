import { VFC } from "react";
import AddressForm from "./AddressForm";
import CostsTable from "./CostsTable";
import styles from "./index.module.scss";
import ShippingOptionForm from "./ShippingOptionForm";
const ShippingForm: VFC = () => {
    return (
        <section className={styles.main}>
            <h2>2. Calculate Shipping</h2>
            <AddressForm />
            <ShippingOptionForm />
            <CostsTable />
        </section>
    );
};
export default ShippingForm;
