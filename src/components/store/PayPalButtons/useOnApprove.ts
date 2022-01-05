import { OnApproveActions, OnApproveData } from "@paypal/paypal-js/types/components/buttons";
import { useCallback } from "react";
const useOnApprove = () => {
  return useCallback(
    async (_data: OnApproveData, actions: OnApproveActions): Promise<void> => {
        const response = await actions.order.capture()
        // :TODO: invoice
    },
    [],
  );
};
export default useOnApprove