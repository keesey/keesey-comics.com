import { FC } from "react"
import AddressContainer from "./context/address/AddressContainer"
import ApprovalContainer from "./context/approval/ApprovalContainer"
import CostsContainer from "./context/costs/CostsContainer"
import OrderContainer from "./context/order/OrderContainer"
const CartContainer: FC = ({ children }) => {
    return (
        <ApprovalContainer>
            <OrderContainer>
                <AddressContainer>
                    <CostsContainer>{children}</CostsContainer>
                </AddressContainer>
            </OrderContainer>
        </ApprovalContainer>
    )
}
export default CartContainer
