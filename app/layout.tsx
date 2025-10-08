import { OrderContainer } from "@/lib/cart/context/order/OrderContainer"
import { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import Footer from "./_components/Footer"
import Navbar from "./_components/NavBar"
import { SocialLinks } from "./_components/SocialLinks"
import { AllComicsAside } from "./comics/_components/AllComicsAside"
import "./globals.css"
import Script from "next/script"

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
        src={`//www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`}
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config",${JSON.stringify(GA4_ID)})`,
        }}
      />
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-900">
          <OrderContainer>
            <Navbar />
            <main className="flex-1">{children}</main>
            <AllComicsAside />
            <SocialLinks />
            <Footer />
          </OrderContainer>
        </div>
      </body>
    </html>
  )
}
