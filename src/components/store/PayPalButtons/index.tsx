import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { VFC } from "react"
import Buttons from "./Buttons"
const PayPalButtons: VFC = () => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                currency: "USD",
            }}
        >
            <Buttons />
        </PayPalScriptProvider>
    )
}
export default PayPalButtons
