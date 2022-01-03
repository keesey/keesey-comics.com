import { Product } from "../models/Product";
import { PRODUCT_TYPES_MAP } from "./PRODUCT_TYPES";
const PRODUCTS: readonly Product[] = [
    {
        html: "<cite>Paleocene</cite> #1",
        id: "COB-STD-PAL-01B",
        name: "Paleocene #1",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> #2",
        id: "COB-STD-PAL-02A",
        name: "Paleocene #2",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> #3",
        id: "COB-STD-PAL-03A",
        name: "Paleocene #3",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> Poster &quot;Skull&quot;",
        id: "POS-17I-001",
        name: "Paleocene Poster \"Skull\"",
        type: PRODUCT_TYPES_MAP["POS-17I"],
    },
    {
        html: "<cite>Paleocene</cite> Poster &quot;Bird&quot;",
        id: "POS-17I-002",
        name: "Paleocene Poster \"Bird\"",
        type: PRODUCT_TYPES_MAP["POS-17I"],
    },
    {
        html: "<cite>Paleocene</cite> Bookmark",
        id: "BKM-06I-001",
        name: "Paleocene Bookmark",
        type: PRODUCT_TYPES_MAP["BKM-06I"],
    },
    {
        html: "<cite>Paleocene</cite> Sticker &quot;Eyes&quot;",
        id: "STK-SQ2-001",
        name: "Paleocene Sticker \"Eyes\"",
        type: PRODUCT_TYPES_MAP["STK-02I"],
    },
    {
        html: "<cite>Paleocene</cite> Sticker &quot;Bird&quot;",
        id: "STK-SQ2-002",
        name: "Paleocene Sticker \"Bird\"",
        type: PRODUCT_TYPES_MAP["STK-02I"],
    },
];
export const PRODUCTS_MAP = PRODUCTS.reduce<Readonly<Record<string, Product>>>(
    (prev, product) => ({
        ...prev,
        [product.id]: product,
    }),
    {},
);
export default PRODUCTS;
