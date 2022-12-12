import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import { FC } from "react"
import Buttons from "./Buttons"
const PayPalButtons: FC = () => {
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
