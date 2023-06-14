"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
import theme from "themes/shimbun"

export function Providers({ children }: PropsWithChildren) {
    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
