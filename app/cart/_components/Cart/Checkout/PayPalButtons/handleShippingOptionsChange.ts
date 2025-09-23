import type {
  OnShippingOptionsChangeActions,
  OnShippingOptionsChangeData,
} from "@paypal/paypal-js"
export const handleShippingOptionsChange = (
  _data: OnShippingOptionsChangeData,
  actions: OnShippingOptionsChangeActions,
) => {
  alert(
    "Shipping options were updated. Please review and submit your payment again.",
  )
  return actions.reject()
}
