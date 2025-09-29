import { PRODUCTS_MAP } from "@/lib/cart/constants/PRODUCTS"
import type { MetadataRoute } from "next"
const priority = 0.5
const ROOT = `https://www.keesey-comics.com/`
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split("T", 1)[0]
  const propsDaily = {
    changeFrequency: "daily" as const,
    lastModified,
    priority,
  }
  const propsMonthly = {
    changeFrequency: "monthly" as const,
    lastModified,
    priority,
  }
  return [
    { ...propsDaily, url: ROOT },
    { ...propsDaily, url: `${ROOT}comics` },
    { ...propsDaily, url: `${ROOT}comics/paleocene` },
    { ...propsMonthly, url: `${ROOT}comics/paleocene/issues/01` },
    { ...propsMonthly, url: `${ROOT}comics/paleocene/issues/02` },
    { ...propsMonthly, url: `${ROOT}comics/paleocene/issues/03` },
    { ...propsMonthly, url: `${ROOT}comics/paleocene/issues/04` },
    { ...propsMonthly, url: `${ROOT}comics/paleocene/issues/05` },
    { ...propsDaily, url: `${ROOT}comics/paleocene/issues/06` },
    { ...propsMonthly, url: `${ROOT}comics/parry-n-carney` },
    { ...propsMonthly, url: `${ROOT}comics/pleistocene` },
    { ...propsMonthly, url: `${ROOT}comics/the-flesh` },
    { ...propsMonthly, url: `${ROOT}comics/the-flesh/issues/01` },
    { ...propsMonthly, url: `${ROOT}comics/the-flesh/issues/02` },
    { ...propsMonthly, url: `${ROOT}comics/the-flesh/issues/03` },
    { ...propsMonthly, url: `${ROOT}contact` },
    { ...propsMonthly, url: `${ROOT}creators` },
    { ...propsMonthly, url: `${ROOT}creators/gage-ullman` },
    { ...propsMonthly, url: `${ROOT}creators/mike-keesey` },
    { ...propsMonthly, url: `${ROOT}newsletter` },
    { ...propsDaily, url: `${ROOT}products` },
    ...Object.keys(PRODUCTS_MAP).map(productId => ({
      ...propsMonthly,
      url: `${ROOT}products/${encodeURIComponent(productId)}`,
    })),
  ]
}
