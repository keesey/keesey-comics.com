import { PurchaseUnitItem } from "@paypal/paypal-js/types/apis/orders"
import { CreateOrderActions } from "@paypal/paypal-js/types/components/buttons"
import { useCallback, useContext } from "react"
import { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import CostsContext from "~/cart/context/costs/Context"
import OrderContext from "~/cart/context/order/Context"
const useCreateOrder = () => {
    const [order] = useContext(OrderContext) ?? []
    const { costs } = useContext(CostsContext) ?? {}
    return useCallback(
        async (_: unknown, actions: CreateOrderActions): Promise<string> => {
            if (!costs || !order?.items.length) {
                throw new Error()
            }
            const amount = costs
                ? costs.containers +
                  costs.handling +
                  costs.processing +
                  costs.products +
                  costs.salesTax +
                  costs.shipping +
                  costs.shippingAdditional
                : NaN
            const orderId = await actions.order.create({
                application_context: {
                    brand_name: "Keesey Comics",
                },
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            breakdown: {
                                handling: {
                                    currency_code: "USD",
                                    value: (
                                        costs.containers +
                                        costs.handling +
                                        costs.shippingAdditional +
                                        costs.processing
                                    ).toFixed(2),
                                },
                                item_total: {
                                    currency_code: "USD",
                                    value: costs.products.toFixed(2),
                                },
                                shipping: {
                                    currency_code: "USD",
                                    value: costs.shipping.toFixed(2),
                                },
                                tax_total: {
                                    currency_code: "USD",
                                    value: costs.salesTax.toFixed(2),
                                },
                            },
                            currency_code: "USD",
                            value: amount.toFixed(2),
                        },
                        items: order?.items.map<PurchaseUnitItem>(item => {
                            const product = PRODUCTS_MAP[item.productId]
                            const shippingOptions = (product.type.shippingOptions ?? []).filter(option =>
                                order.shippingOptionIds.includes(option.id),
                            )
                            const description =
                                product.type.name +
                                (shippingOptions.length === 0
                                    ? ""
                                    : ` (${shippingOptions.map(option => option.name).join(", ")})`)
                            return {
                                category: "PHYSICAL_GOODS",
                                description,
                                name: product.name,
                                quantity: item.quantity.toString(10),
                                sku: item.productId,
                                tax: {
                                    currency_code: "USD",
                                    value: (product.type.value * Number(process.env.NEXT_PUBLIC_SALES_TAX)).toFixed(2),
                                },
                                unit_amount: {
                                    currency_code: "USD",
                                    value: product.type.value.toFixed(2),
                                },
                            }
                        }),
                        payee: {
                            email_address: "keesey@gmail.com",
                        },
                    },
                ],
            })
            return orderId
        },
        [costs, order],
    )
}
export default useCreateOrder
