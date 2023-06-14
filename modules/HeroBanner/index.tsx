"use client"
import { Box, useColorMode } from "@chakra-ui/react"
import Image from "next/image"
import { FC, PropsWithChildren } from "react"
export type HeroBannerProps = PropsWithChildren<{
    imageSource: string
}>
export const HeroBanner: FC<HeroBannerProps> = ({ children, imageSource }) => {
    const { colorMode } = useColorMode()
    return (
        <Box pos="relative" bgColor={colorMode === "dark" ? "ink" : "newsprint"}  color={colorMode === "dark" ? "newsprint" : "ink"}>
            <Box pos="absolute" left={12} top={12} right={12} bottom={12} borderColor={colorMode === "dark" ? "newsprint" : "ink"} borderStyle="solid" borderWidth={2}>
                <Image alt="" src={imageSource} fill style={{ objectFit: "cover", objectPosition: "center" }} />
            </Box>
            <Box p={24}>{children}</Box>
        </Box>
    )
}
