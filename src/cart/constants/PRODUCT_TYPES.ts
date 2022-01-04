import { ProductType } from "../models/ProductType";
import { SHIPPING_OPTIONS_MAP } from "./SHIPPING_OPTIONS";
const PRODUCT_TYPES: readonly ProductType[] = [
    {
        html: `Standard Size Comic Book (6⅞<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 10½<abbr title="inches">&quot;</abbr>), 22 Story Pages <abbr title="Plus">+</abbr> Extra Material`,
        id: "COB-STD",
        name: "Comic Book (6⅞ × 10½ in)",
        ounces: 4.1,
        shippingOptions: [
            SHIPPING_OPTIONS_MAP["BAB"],
            SHIPPING_OPTIONS_MAP["NOB"],
        ],
        value: 4,
    },
    {
        html: `Sticker (2<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 2<abbr title="inches">&quot;</abbr>)`,
        id: "STK-02I",
        name: "Sticker (2 × 2 in)",
        ounces: 0.02,
        value: 0.5,
    },
    {
        html: `Bookmark (2<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 6<abbr title="inches">&quot;</abbr>)`,
        id: "BKM-06I",
        name: "Bookmark (2 × 6 in)",
        ounces: 0.09,
        value: 2,
    },
    {
        html: `Poster (11<abbr title="inches">&quot;</abbr> <abbr title="by">×</abbr> 17<abbr title="inches">&quot;</abbr>)`,
        id: "POS-17I",
        name: "Poster (11 × 17 in)",
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
