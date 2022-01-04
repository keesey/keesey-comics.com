import { useCallback, useContext } from "react";
import Context from "~/cart/context/order/Context";
const useQuantityIncrementer = (productId: string) => {
  const [, dispatch] = useContext(Context) ?? [];
  return useCallback(
    () => dispatch?.({ type: "INCREMENT_QUANTITY", payload: { productId } }),
    [dispatch, productId]
  );
};
export default useQuantityIncrementer;
