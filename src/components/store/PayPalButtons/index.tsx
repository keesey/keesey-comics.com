import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useContext, VFC } from "react"
import CostsContext from "~/cart/context/costs/Context"
import Buttons from "./Buttons"
const PayPalButtons: VFC = () => {
    const { costs } = useContext(CostsContext) ?? {}
    return (
        <PayPalScriptProvider
            options={{
                "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                currency: "USD",
            }}
        >
            {costs && <Buttons />}
        </PayPalScriptProvider>
    );
};
export default PayPalButtons;
