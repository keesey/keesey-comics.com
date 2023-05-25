import PageLayout from "layout/PageLayout"
import { PropsWithChildren } from "react"
import { Providers } from "./Providers"
export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <PageLayout>{children}</PageLayout>
                </Providers>
            </body>
        </html>
    )
}
