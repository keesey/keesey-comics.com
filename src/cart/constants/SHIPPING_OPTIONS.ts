import { ShippingOption } from "../models/ShippingOption"
const SHIPPING_OPTIONS: readonly ShippingOption[] = [
    {
        id: "BAB",
        name: "Bagged and Boarded",
        ounces: 0.7,
        value: 0.15,
    },
    {
        id: "NOB",
        name: "No Packaging",
        ounces: 0,
        value: 0,
    },
    {
        id: "UNF",
        name: "Unfolded",
        ounces: 0,
        value: 0,
    },
    {
        id: "FOL",
        name: "Folded",
        ounces: 0,
        value: 0,
    },
]
export const SHIPPING_OPTIONS_MAP = SHIPPING_OPTIONS.reduce<Readonly<Record<string, ShippingOption>>>(
    (prev, option) => ({
        ...prev,
        [option.id]: option,
    }),
    {},
)
export type ShippingOptionList = Readonly<{
    name: string
    options: readonly ShippingOption[]
}>
export const SHIPPING_OPTION_LISTS: readonly ShippingOptionList[] = [
    {
        name: "Comic Books",
        options: [SHIPPING_OPTIONS_MAP["BAB"], SHIPPING_OPTIONS_MAP["NOB"]],
    },
    {
        name: "Posters",
        options: [SHIPPING_OPTIONS_MAP["UNF"], SHIPPING_OPTIONS_MAP["FOL"]],
    },
]
export default SHIPPING_OPTIONS
