"use client"
import { Link } from "@chakra-ui/next-js"
import { Center, Flex } from "@chakra-ui/react"
import Image from "next/image"
import React, { FC } from "react"
const HeaderNav: FC = () => {
    return (
        <Center as="header" pos="sticky">
            <Flex as="nav">
                <Link href="/about">About</Link>
                <Link href="/collection">Collection</Link>
                <Image src="/images/logos/black/keesey-comics.svg" width={474.7} height={283.7} alt="Keesey Comics" />
                <Link href="/store">Store</Link>
                <Link href="/contact">Contact</Link>
            </Flex>
        </Center>
    )
}
export default HeaderNav
