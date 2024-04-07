"use client"
import { Image, Link } from "@chakra-ui/next-js"
import { Box, Center, Flex, useColorMode } from "@chakra-ui/react"
import { FC } from "react"
const HeaderNav: FC = () => {
    const { colorMode } = useColorMode()
    return (
        <Center as="header" pos="sticky" bgColor="white" color="ink" p={6} _dark={{ bgColor: "black", color: "paper" }}>
            <Flex alignItems="center" gap={8} as="nav" justifyContent="center" textStyle="body">
                <Link href="/about">About</Link>
                <Link href="/collection">Collection</Link>
                <Box
                    pos="relative"
                    w={{ base: 474.7 / 5, md: 474.7 / 4, lg: 474.7 / 3 }}
                    h={{ base: 283.7 / 5, md: 283.7 / 4, lg: 283.7 / 3 }}
                >
                    <Image
                        src={`/images/logos/${colorMode === "dark" ? "white" : "black"}/keesey-comics.svg`}
                        fill
                        alt="Keesey Comics"
                    />
                </Box>
                <Link href="/store">Store</Link>
                <Link href="/contact">Contact</Link>
            </Flex>
        </Center>
    )
}
export default HeaderNav
