import { FC, useContext } from "react"
import Context from "~/cart/context/approval/Context"
import Checkout from "../Checkout"
import Invoice from "../Invoice"
const Cart: FC = () => {
    const [approval] = useContext(Context) ?? []
    return approval ? <Invoice /> : <Checkout />
}
export default Cart
