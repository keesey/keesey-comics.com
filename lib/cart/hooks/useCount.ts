import { useContext, useMemo } from "react"
import { Context } from "../context/order/Context"
export const useCount = () => {
  const [order] = useContext(Context) ?? []
  return useMemo(() => {
    if (!order?.items.length) {
      return 0
    }
    return order.items.reduce<number>((prev, item) => prev + item.quantity, 0)
  }, [order])
}
