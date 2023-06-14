import { mode } from "@chakra-ui/theme-tools"
import { extendTheme, type StyleFunctionProps } from "@chakra-ui/react"
import { Baloo_Tammudu_2, Signika_Negative } from "@next/font/google"
const balooTammudu2 = Baloo_Tammudu_2({ subsets: ["latin"] })
const signikaNegative = Signika_Negative({ subsets: ["latin"] })
const shimbun = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    colors: {
        black: "#000000",
        ink: "#231f20",
        newsprint: "#ece7e6",
        slate: "#768b91",
        white: "#ffffff",
    },
    fonts: {
        body: signikaNegative.style.fontFamily,
        heading: balooTammudu2.style.fontFamily,
    },
    layerStyles: {
        newsprint: {
            bg: "newsprint",
            color: "k100",
        },
        reverse: {
            bg: "k100",
            color: "white",
        },
    },
    textStyles: {
        body: {
            font: "body",
            fontSize: [16, 20, 24, 28],
        },
        heading: {
            font: "heading",
            fontWeight: "bold",
            fontSize: [24, 32, 48],
        },
    },
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                layerStyle: mode("newsprint", "reverse")(props),
            },
            html: {
                bg: mode("ink", "newsprint")(props),
            },
        }),
    },
})
export default shimbun
