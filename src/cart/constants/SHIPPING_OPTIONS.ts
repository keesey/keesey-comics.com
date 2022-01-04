import { ShippingOption } from "../models/ShippingOption";
const SHIPPING_OPTIONS: readonly ShippingOption[] = [
    {
        id: "BAB",
        name: "Bagged and Boarded",
        ounces: 0, // :TODO: Update and reduce COB-STD
        value: 0.5,
    },
    {
        id: "NOB",
        name: "No Packaging",
        ounces: 0,
        value: 0,
    },
    {
        id: "FOL",
        name: "Folded",
        ounces: 0,
        value: 0,
    },
    {
        id: "UNF",
        name: "Unfolded",
        ounces: 0,
        value: 0,
    },
];
export const SHIPPING_OPTIONS_MAP= SHIPPING_OPTIONS.reduce<Readonly<Record<string, ShippingOption>>>(
    (prev, option) => ({
        ...prev,
        [option.id]: option,
    }),
    {},
);
export default SHIPPING_OPTIONS;
