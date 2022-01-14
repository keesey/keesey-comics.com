import { OnApproveActions, OnApproveData } from "@paypal/paypal-js/types/components/buttons"
import { useCallback, useContext } from "react"
import ApprovalContext from "~/cart/context/approval/Context"
import OrderContext from "~/cart/context/order/Context"
const useOnApprove = () => {
    const [, dispatchApproval] = useContext(ApprovalContext) ?? []
    const [, dispatchOrder] = useContext(OrderContext) ?? []
    return useCallback(
        async (data: OnApproveData, actions: OnApproveActions) => {
            try {
                const response = await actions.order.capture()
                switch (response.status) {
                    case "PAYER_ACTION_REQUIRED": {
                        break
                    }
                    case "VOIDED": {
                        throw new Error("The transaction was voided.")
                    }
                    default: {
                        dispatchOrder?.({ type: "RESET" })
                        dispatchApproval?.({ type: "INITIALIZE", payload: { data, response } })
                    }
                }
            } catch (e) {
                alert(e)
            }
        },
        [dispatchApproval, dispatchOrder],
    )
}
export default useOnApprove
