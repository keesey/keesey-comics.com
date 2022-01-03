import { FC } from "react";
import AddressContainer from "./context/address/AddressContainer";
import CostsContainer from "./context/costs/CostsContainer";
import OrderContainer from "./context/order/OrderContainer";
const CartContainer: FC = ({ children }) => {
    return (
        <OrderContainer>
            <AddressContainer>
                <CostsContainer>
                    {children}
                </CostsContainer>
            </AddressContainer>
        </OrderContainer>
    );
};
export default CartContainer;
