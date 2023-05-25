import { PropsWithChildren } from "react"
import { Providers } from "./Providers"
export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
