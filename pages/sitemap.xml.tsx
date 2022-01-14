import { GetServerSideProps, NextPage } from "next"
import PRODUCTS from "~/cart/constants/PRODUCTS"
const Page: NextPage = () => null
const PATHS: readonly string[] = [
    "",
    "store",
    "paleocene",
    "paleocene/issues/01",
    "paleocene/issues/02",
    "paleocene/issues/03",
    "pleistocene",
    "mailinglist",
    "contact",
    ...PRODUCTS.filter(product => !product.path).map(product => `products/${product.id}`),
]
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const baseUrl = {
        development: "http://localhost:3000",
        production: "https://www.keesey-comics.com",
        test: "http://localhost:3000",
    }[process.env.NODE_ENV]
    const lastmod = new Date().toISOString()
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${PATHS
            .map(
                path => `
            <url>
              <loc>${baseUrl}/${path}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `,
            )
            .join("")}
    </urlset>
  `
    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()
    return {
        props: {},
    }
}
export default Page
