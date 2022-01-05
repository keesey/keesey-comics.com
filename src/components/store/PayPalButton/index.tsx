import { useContext, useState, VFC } from "react"
import Head from "next/head"
import Context from "~/cart/context/costs/Context"
const CONTAINER_ID = "payPalContainer"
const PayPalButton: VFC = () => {
    const [element, setElement] = useState<HTMLDivElement | null>(null)
    const { costs } = useContext(Context) ?? {}
    return (
        <>
            <Head>
                <script key="script:paypal-checkout" src="https://www.paypalobjects.com/api/checkout.js" async></script>
            </Head>
            <div id={CONTAINER_ID} ref={setElement} />
        </>
    )
}
export default PayPalButton