import { Container } from "../models/Container";
import { PRODUCT_TYPES_MAP } from "./PRODUCT_TYPES";
import { SHIPPING_OPTIONS_MAP } from "./SHIPPING_OPTIONS";
const CONTAINERS: readonly Container[] = [
    {
        dimensions: [11, 7.25, 0.25],
        ounces: 1.2,
        quantities: [
            {
                maximum: 3,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 5,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 6,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 12,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 24,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 1.5,
    },
];
export default CONTAINERS;
