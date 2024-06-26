import { Reducer } from "react"
import PRODUCTS, { PRODUCTS_MAP } from "~/cart/constants/PRODUCTS"
import SHIPPING_OPTIONS, { SHIPPING_OPTION_LISTS } from "~/cart/constants/SHIPPING_OPTIONS"
import { OrderItem } from "~/cart/models/OrderItem"
import { Action } from "./Action"
import { State } from "./State"
const compareItems = (a: OrderItem, b: OrderItem) => {
    if (a === b) {
        return 0
    }
    const aIndex = PRODUCTS.findIndex(item => item.id === a.productId)
    const bIndex = PRODUCTS.findIndex(item => item.id === b.productId)
    if (!(aIndex >= 0)) {
        if (!(bIndex >= 0)) {
            return 0
        }
        return 1
    }
    if (!(bIndex >= 0)) {
        return 1
    }
    return aIndex - bIndex
}
const compareShippingOptionIds = (a: string, b: string) => {
    if (a === b) {
        return 0
    }
    const aIndex = SHIPPING_OPTIONS.findIndex(item => item.id === a)
    const bIndex = SHIPPING_OPTIONS.findIndex(item => item.id === b)
    if (!(aIndex >= 0)) {
        if (!(bIndex >= 0)) {
            return 0
        }
        return 1
    }
    if (!(bIndex >= 0)) {
        return 1
    }
    return aIndex - bIndex
}
const removeUnusedShippingOptionIds = (ids: readonly string[], items: readonly OrderItem[]) =>
    ids.filter(id =>
        items.some(item => {
            const product = PRODUCTS_MAP[item.productId]
            return product.type.shippingOptions?.some(option => option.id === id)
        }),
    )
const addDefaultShippingOptionIds = (ids: readonly string[], items: readonly OrderItem[]) => {
    const set = new Set<string>(ids)
    items
        .map(item => PRODUCTS_MAP[item.productId].type.shippingOptions)
        .forEach(shippingOptions => {
            if (shippingOptions?.length && !shippingOptions?.some(option => set.has(option.id))) {
                set.add(shippingOptions[0].id)
            }
        })
    return [...set].sort(compareShippingOptionIds)
}
const normalizeShippingOptionIds = (ids: readonly string[], items: readonly OrderItem[]): readonly string[] => {
    return addDefaultShippingOptionIds(removeUnusedShippingOptionIds(ids, items), items)
}
const areCompetingShippingOptionIds = (a: string, b: string) => {
    return (
        a === b ||
        SHIPPING_OPTION_LISTS.some(
            list => list.options.some(option => option.id === a) && list.options.some(option => option.id === b),
        )
    )
}
const removeCompetingShippingOptionIds = (ids: readonly string[], newId: string) =>
    ids.filter(id => !areCompetingShippingOptionIds(id, newId))
const getQuantity = (prevState: State, productId: string): number => {
    const item = prevState.items.find(item => item.productId === productId)
    return item ? item.quantity : 0
}
const setQuantity = (prevState: State, productId: string, quantity: number): State => {
    const { items } = prevState
    quantity = Math.max(1, Math.min(PRODUCTS_MAP[productId].type.maximum, Math.round(quantity)))
    if (!items.some(item => item.productId === productId)) {
        const newItems = [...items, { productId, quantity }].sort(compareItems)
        return {
            ...prevState,
            items: newItems,
            shippingOptionIds: normalizeShippingOptionIds(prevState.shippingOptionIds, newItems),
        }
    }
    return {
        ...prevState,
        items: items.map(item => (item.productId === productId ? { ...item, quantity } : item)),
    }
}
const isValidQuantity = (q: number) => isFinite(q) && q >= 1
const reducer: Reducer<State | undefined, Action> = (prevState, action) => {
    console.debug(action)
    switch (action.type) {
        case "INCREMENT_QUANTITY": {
            if (!PRODUCTS_MAP[action.payload.productId]) {
                console.warn("Invalid product.")
                return prevState ?? { items: [], shippingOptionIds: [] }
            }
            return setQuantity(
                prevState ?? { items: [], shippingOptionIds: [] },
                action.payload.productId,
                getQuantity(prevState ?? { items: [], shippingOptionIds: [] }, action.payload.productId) + 1,
            )
        }
        case "INITIALIZE": {
            const items = (action.payload?.items ?? [])
                .filter(item => PRODUCTS_MAP[item.productId] && isValidQuantity(item.quantity))
                .map(item => ({
                    ...item,
                    quantity: Math.min(PRODUCTS_MAP[item.productId].type.maximum, item.quantity),
                }))
            return {
                items,
                shippingOptionIds: normalizeShippingOptionIds(action.payload?.shippingOptionIds ?? [], items),
            }
        }
        case "REMOVE_PRODUCT": {
            const items = prevState?.items.filter(item => item.productId !== action.payload.productId) ?? []
            if (items.length === prevState?.items.length ?? 0) {
                return prevState ?? { items: [], shippingOptionIds: [] }
            }
            return {
                ...prevState,
                items,
                shippingOptionIds: normalizeShippingOptionIds(prevState?.shippingOptionIds ?? [], items),
            }
        }
        case "RESET": {
            return { items: [], shippingOptionIds: [] }
        }
        case "SET_QUANTITY": {
            if (!PRODUCTS_MAP[action.payload.productId]) {
                console.warn("Invalid product.")
                return prevState ?? { items: [], shippingOptionIds: [] }
            }
            if (!isValidQuantity(action.payload.quantity)) {
                console.warn("Invalid quantity.")
                return prevState ?? { items: [], shippingOptionIds: [] }
            }
            return setQuantity(
                prevState ?? { items: [], shippingOptionIds: [] },
                action.payload.productId,
                action.payload.quantity,
            )
        }
        case "SELECT_SHIPPING_OPTION": {
            return {
                items: [],
                ...prevState,
                shippingOptionIds: [
                    ...removeCompetingShippingOptionIds(
                        prevState?.shippingOptionIds ?? [],
                        action.payload.shippingOptionId,
                    ),
                    action.payload.shippingOptionId,
                ].sort(compareShippingOptionIds),
            }
        }
        default: {
            return prevState
        }
    }
}
export default reducer
