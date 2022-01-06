import { useCallback, useContext } from "react";
import Context from "~/cart/context/order/Context";
const useQuantityIncrementer = (productIds: readonly string[]) => {
  const [, dispatch] = useContext(Context) ?? [];
  return useCallback(
    () => {
      for (const productId of productIds) {
        dispatch?.({ type: "INCREMENT_QUANTITY", payload: { productId } });
      }
    },
    [dispatch, productIds]
  );
};
export default useQuantityIncrementer;
