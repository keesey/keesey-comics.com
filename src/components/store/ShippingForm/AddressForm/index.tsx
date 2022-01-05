import { ChangeEvent, useCallback, useContext, useMemo, VFC } from "react";
import USPS_COUNTRIES from "~/cart/constants/USPS_COUNTRIES";
import Context from "~/cart/context/address/Context";
import isDomestic from "~/cart/functions/isDomestic";
import styles from "./index.module.scss";
const AddressForm: VFC = () => {
    const [address, dispatch] = useContext(Context) ?? [];
    const domestic = useMemo(() => Boolean(address?.country && isDomestic(address.country)), [address?.country])
    const handleCountrySelectChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            dispatch?.({ type: "SET_COUNTRY", payload: event.currentTarget.value })
        },
        [dispatch]
    );
    const handlePostalCodeInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch?.({ type: "SET_POSTAL_CODE", payload: event.currentTarget.value })
        },
        [dispatch]
    );
    if (!address) {
        return null;
    }
    return (
        <section className={styles.main}>
            <select
                onChange={handleCountrySelectChange}
                required
                value={address.country}
            >
                {USPS_COUNTRIES.map((value) => (
                    <option key={value} label={value} value={value} />
                ))}
            </select>
            {domestic && (
                <input
                    maxLength={32}
                    name="postalCode"
                    onChange={handlePostalCodeInputChange}
                    placeholder="ZIP Code"
                    type="text"
                    value={address.postalCode ?? ""}
                />
            )}
        </section>
    );
};
export default AddressForm
