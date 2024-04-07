import { Container } from "../models/Container"
import { PRODUCT_TYPES_MAP } from "./PRODUCT_TYPES"
import { SHIPPING_OPTIONS_MAP } from "./SHIPPING_OPTIONS"
const CONTAINERS: readonly Container[] = [
    {
        // Tiny Flat
        dimensions: [11, 7.25, 0.5],
        ounces: 1.2,
        quantities: [
            {
                maximum: 3,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 3,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 3,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 3,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 5,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 0.5,
    },
    {
        // Small Flat
        dimensions: [11, 8.5, 0.5],
        ounces: 1.4,
        quantities: [
            {
                maximum: 7,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 6,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 10,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 9,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 5,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 0.53,
    },
    {
        // Large Flat
        dimensions: [13.5, 11, 0.5],
        ounces: 4.5,
        quantities: [
            {
                maximum: 8,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 7,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 10,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 9,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 5,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 0.65,
    },
    {
        // Huge Flat
        dimensions: [17.25, 14.25, 1.5],
        ounces: 7.5,
        quantities: [
            {
                maximum: 12,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 11,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 16,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 15,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["UNF"],
            },
            {
                maximum: 60,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 60,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 0.86,
    },
    {
        // Small Box
        dimensions: [11.5, 8, 1.5],
        ounces: 3.7,
        quantities: [
            {
                maximum: 9,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 8,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 11,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 10,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 40,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 1.45,
    },
    {
        // Medium Box
        dimensions: [12, 9.25, 3.25],
        ounces: 8,
        quantities: [
            {
                maximum: 20,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 18,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 30,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 26,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 30,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 1.55,
    },
    {
        // Large Box
        dimensions: [18.5, 12, 12],
        ounces: 19,
        quantities: [
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["BAB"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["COB-STD"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["COB-ST2"],
                shippingOption: SHIPPING_OPTIONS_MAP["NOB"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["FOL"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["POS-17I"],
                shippingOption: SHIPPING_OPTIONS_MAP["UNF"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["BKM-06I"],
            },
            {
                maximum: 100,
                productType: PRODUCT_TYPES_MAP["STK-02I"],
            },
        ],
        value: 2.05,
    },
]
export default CONTAINERS
