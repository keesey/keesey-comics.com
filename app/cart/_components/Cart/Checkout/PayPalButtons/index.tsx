import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import Buttons from "./Buttons"
export const PayPalButtons = () => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD",
      }}
    >
      <section className="mx-auto flex w-xl max-w-screen flex-col items-center justify-center gap-4 rounded-4xl border-2 border-gray-200 bg-white p-4 dark:border-none dark:bg-black">
        <h2 className="text-xl font-bold">3. Finalize Purchase</h2>
        <Buttons />
      </section>
    </PayPalScriptProvider>
  )
}
