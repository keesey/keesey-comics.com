import { useContext, VFC } from "react";
import Context from "~/cart/context/approval/Context";
import Checkout from "../Checkout";
import Invoice from "../Invoice";
const Cart: VFC = () => {
    const [approval] = useContext(Context) ?? [];
    return approval ? <Invoice /> : <Checkout />;
}
export default Cart;
