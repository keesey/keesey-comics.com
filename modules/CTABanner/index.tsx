"use client"
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
export type CTABannerProps = {
    button: ReactNode
    content: ReactNode
    header: ReactNode
}
export const CTABanner: FC<CTABannerProps> = ({ button, header, content }) => {
    return (
        <Flex as="aside">
            <Box>
                <Text as="h2">{header}</Text>
                <Text>{content}</Text>
            </Box>
            <Center>{button}</Center>
        </Flex>
    )
}
