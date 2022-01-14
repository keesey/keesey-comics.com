import { useCallback, useContext, VFC } from "react"
import Context from "~/cart/context/order/Context"
import styles from "./index.module.scss"
export interface Props {
    productId: string
}
const RemoveButton: VFC<Props> = ({ productId }) => {
    const [, dispatch] = useContext(Context) ?? []
    const handleRemoveButtonClick = useCallback(() => {
        if (confirm("Are you sure you want to remove this from your cart?")) {
            dispatch?.({
                type: "REMOVE_PRODUCT",
                payload: { productId },
            })
        }
    }, [dispatch, productId])
    return (
        <a key="remove" className={styles.main} onClick={handleRemoveButtonClick} role="button">
            Remove
        </a>
    )
}
export default RemoveButton
