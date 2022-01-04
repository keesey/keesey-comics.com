import { Product } from "../models/Product";
import { PRODUCT_TYPES_MAP } from "./PRODUCT_TYPES";
const PRODUCTS: readonly Product[] = [
    {
        html: "<cite>Paleocene</cite> #1",
        id: "COB-STD-PAL-01B",
        imagePath: "/images/issues/paleocene/01/front_cover.png",
        name: "Paleocene #1",
        path: "/paleocene/issues/01",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> #2",
        id: "COB-STD-PAL-02A",
        imagePath: "/images/issues/paleocene/02/front_cover.png",
        name: "Paleocene #2",
        path: "/paleocene/issues/02",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> #3",
        id: "COB-STD-PAL-03A",
        imagePath: "/images/issues/paleocene/03/front_cover.png",
        name: "Paleocene #3",
        path: "/paleocene/issues/03",
        type: PRODUCT_TYPES_MAP["COB-STD"],
    },
    {
        html: "<cite>Paleocene</cite> Poster &quot;Skull&quot;",
        id: "POS-17I-PAL-001",
        name: "Paleocene Poster \"Skull\"",
        type: PRODUCT_TYPES_MAP["POS-17I"],
    },
    {
        html: "<cite>Paleocene</cite> Poster &quot;Bird&quot;",
        id: "POS-17I-PAL-002",
        name: "Paleocene Poster \"Bird\"",
        type: PRODUCT_TYPES_MAP["POS-17I"],
    },
    {
        html: "<cite>Paleocene</cite> Bookmark",
        id: "BKM-06I-PAL-001",
        name: "Paleocene Bookmark",
        type: PRODUCT_TYPES_MAP["BKM-06I"],
    },
    {
        html: "<cite>Paleocene</cite> Sticker &quot;Eyes&quot;",
        id: "STK-02I-PAL-001",
        name: "Paleocene Sticker \"Eyes\"",
        type: PRODUCT_TYPES_MAP["STK-02I"],
    },
    {
        html: "<cite>Paleocene</cite> Sticker &quot;Bird&quot;",
        id: "STK-02I-PAL-002",
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
