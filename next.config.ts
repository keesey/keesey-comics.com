import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/kickstarter",
      destination: "https://www.kickstarter.com/profile/keesey/created",
      permanent: false,
    },
    {
      source: "/mailinglist",
      destination: "/newsletter",
      permanent: true,
    },
    {
      source: "/paleocene/:path*",
      destination: "/comics/paleocene/:path*",
      permanent: true,
    },
    {
      source: "/parry-and-carney/:path*",
      destination: "/comics/parry-n-carney/:path*",
      permanent: true,
    },
    {
      source: "/parry-n-carney/:path*",
      destination: "/comics/parry-n-carney/:path*",
      permanent: true,
    },
    {
      source: "/patreon",
      destination: "https://www.patreon.com/tmkeesey",
      permanent: false,
    },
    {
      source: "/patreon/shop",
      destination: "https://www.patreon.com/tmkeesey/shop?source=storefront",
      permanent: false,
    },
    {
      source: "/pleistocene/:path*",
      destination: "/comics/pleistocene/:path*",
      permanent: true,
    },
    {
      source: "/store",
      destination: "/products",
      permanent: true,
    },
    {
      source: "/the-flesh/:path*",
      destination: "/comics/the-flesh/:path*",
      permanent: true,
    },
  ],
  typedRoutes: true,
}

export default nextConfig
