import { FC, useContext, useMemo } from "react"
import { SHIPPING_OPTIONS_MAP } from "~/cart/constants/SHIPPING_OPTIONS"
import Context from "~/cart/context/order/Context"
import { ProductType } from "~/cart/models/ProductType"
import { ShippingOption as ShippingOptionModel } from "~/cart/models/ShippingOption"
export interface Props {
    productType: ProductType
}
const ShippingOption: FC<Props> = ({ productType }) => {
    const [order] = useContext(Context) ?? []
    const shippingOption = useMemo<ShippingOptionModel | undefined>(() => {
        if (!productType.shippingOptions) {
            return undefined
        }
        const id =
            order?.shippingOptionIds.find(id => productType.shippingOptions!.some(option => option.id === id)) ??
            productType.shippingOptions[0].id
        return SHIPPING_OPTIONS_MAP[id]
    }, [productType, order?.shippingOptionIds])
    if (!shippingOption) {
        return null
    }
    return (
        <p>
            <b>Shipping Option</b>: {shippingOption.name}
        </p>
    )
}
export default ShippingOption
