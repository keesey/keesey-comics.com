import { OrderContainer } from "@/lib/cart/context/order/OrderContainer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import Script from "next/script"
import { Footer } from "./_components/Footer"
import { NavBar } from "./_components/NavBar"
import { SocialLinks } from "./_components/SocialLinks"
import { AllComicsAside } from "./comics/_components/AllComicsAside"
import "./globals.css"

const GA4_ID = "G-QVVWQ9ZJEZ"

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keesey-comics.com"),
  openGraph: { siteName: "Keesey Comics" },
  robots: { follow: true, index: true },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script
        async
        id="script-gtm"
        src={`//www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",${JSON.stringify(GA4_ID)})`,
        }}
        id="script-gtm-config"
      />
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-900">
          <OrderContainer>
            <NavBar />
            <main className="flex-1">{children}</main>
            <AllComicsAside />
            <SocialLinks />
            <Footer />
          </OrderContainer>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
