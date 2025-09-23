import { Definition, DefinitionTerm } from "@/components/Definitions"
import { Price } from "@/components/Price"
import { ProductType } from "../models/ProductType"
import { SHIPPING_OPTIONS_MAP } from "./SHIPPING_OPTIONS"
export const PRODUCT_TYPES: readonly ProductType[] = [
  {
    details: (
      <>
        <DefinitionTerm>Unit Price</DefinitionTerm>
        <Definition>
          <Price amount={9.99} />
        </Definition>
        <DefinitionTerm>Dimensions</DefinitionTerm>
        <Definition>
          6{"\u200A"}
          <span style={{ fontVariantNumeric: "diagonal-fractions" }}>7/8</span>
          <abbr title="inches">″</abbr>
          {"\u200A×\u200A"}10{"\u200A"}
          <span style={{ fontVariantNumeric: "diagonal-fractions" }}>1/4</span>
          <abbr title="inches">″</abbr>
        </Definition>
        <DefinitionTerm>Paper Weight</DefinitionTerm>
        <Definition>80# Gloss</Definition>
        <DefinitionTerm>Binding</DefinitionTerm>
        <Definition>Saddle Stitch</Definition>
      </>
    ),
    id: "COB-STD",
    maximum: 10,
    name: "Comic Book (6⅞ × 10¼ in), Glossy",
    ounces: 3.4,
    shippingOptions: [SHIPPING_OPTIONS_MAP["BAB"], SHIPPING_OPTIONS_MAP["NOB"]],
    value: 9.99,
  },
  {
    details: (
      <>
        <DefinitionTerm>Unit Price</DefinitionTerm>
        <Definition>
          <Price amount={7.99} />
        </Definition>
        <DefinitionTerm>Dimensions</DefinitionTerm>
        <Definition>
          6{"\u200A"}
          <span style={{ fontVariantNumeric: "diagonal-fractions" }}>7/8</span>
          <abbr title="inches">″</abbr>
          {"\u200A×\u200A"}10{"\u200A"}
          <span style={{ fontVariantNumeric: "diagonal-fractions" }}>1/4</span>
          <abbr title="inches">″</abbr>
        </Definition>
        <DefinitionTerm>Paper Weight</DefinitionTerm>
        <Definition>60# Uncoated (Interior), 80# Gloss (Covers)</Definition>
        <DefinitionTerm>Binding</DefinitionTerm>
        <Definition>Saddle Stitch</Definition>
      </>
    ),
    id: "COB-ST2",
    maximum: 10,
    name: "Comic Book (6⅞ × 10¼ in), Uncoated",
    ounces: 3.6,
    shippingOptions: [SHIPPING_OPTIONS_MAP["BAB"], SHIPPING_OPTIONS_MAP["NOB"]],
    value: 7.99,
  },
  {
    details: (
      <>
        <DefinitionTerm>Unit Price</DefinitionTerm>
        <Definition>
          <Price amount={0.99} />
        </Definition>
        <DefinitionTerm>Dimensions</DefinitionTerm>
        <Definition>
          2<abbr title="inches">″</abbr>
          {"\u200A×\u200A"}2<abbr title="inches">″</abbr>
        </Definition>
      </>
    ),
    id: "STK-02I",
    maximum: 25,
    name: "Sticker (2 × 2 in)",
    ounces: 0.02,
    value: 0.99,
  },
  {
    details: (
      <>
        <DefinitionTerm>Unit Price</DefinitionTerm>
        <Definition>
          <Price amount={0.99} />
        </Definition>
        <DefinitionTerm>Dimensions</DefinitionTerm>
        <Definition>
          2<abbr title="inches">″</abbr>
          {"\u200A×\u200A"}6<abbr title="inches">″</abbr>
        </Definition>
      </>
    ),
    id: "BKM-06I",
    maximum: 25,
    name: "Bookmark (2 × 6 in)",
    ounces: 0.09,
    value: 0.99,
  },
  {
    details: (
      <>
        <DefinitionTerm>Unit Price</DefinitionTerm>
        <Definition>
          <Price amount={14.99} />
        </Definition>
        <DefinitionTerm>Dimensions</DefinitionTerm>
        <Definition>
          11<abbr title="inches">″</abbr>
          {"\u200A×\u200A"}17
          <abbr title="inches">″</abbr>
        </Definition>
      </>
    ),
    id: "POS-17I",
    maximum: 25,
    name: "Poster (11 × 17 in)",
    ounces: 0.65,
    shippingOptions: [SHIPPING_OPTIONS_MAP["UNF"], SHIPPING_OPTIONS_MAP["FOL"]],
    value: 14.99,
  },
]
export const PRODUCT_TYPES_MAP = PRODUCT_TYPES.reduce<
  Readonly<Record<string, ProductType>>
>(
  (prev, productType) => ({
    ...prev,
    [productType.id]: productType,
  }),
  {},
)
