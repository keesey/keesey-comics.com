import { ProductType } from "../models/ProductType";
import { SHIPPING_OPTIONS_MAP } from "./SHIPPING_OPTIONS";
const PRODUCT_TYPES: readonly ProductType[] = [
    {
        id: "COB-STD",
        name: "Comic Book (6⅞×10½in)",
        ounces: 4.1,
        shippingOptions: [
            SHIPPING_OPTIONS_MAP["BAB"],
            SHIPPING_OPTIONS_MAP["NOB"],
        ],
        value: 4,
    },
    {
        id: "STK-02I",
        name: "Sticker (2×2in)",
        ounces: 0.02,
        value: 0.5,
    },
    {
        id: "BKM-06I",
        name: "Bookmark (6×2in)",
        ounces: 0.09,
        value: 1,
    },
    {
        id: "POS-17I",
        name: "Poster (11×17in)",
        ounces: 0.65,
        shippingOptions: [
            SHIPPING_OPTIONS_MAP["UNF"],
            SHIPPING_OPTIONS_MAP["FOL"],
        ],
        value: 5,
    },
];
export const PRODUCT_TYPES_MAP = PRODUCT_TYPES.reduce<Readonly<Record<string, ProductType>>>(
    (prev, productType) => ({
        ...prev,
        [productType.id]: productType,
    }),
    {},
);
export default PRODUCT_TYPES;
