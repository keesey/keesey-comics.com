"use client"
import { Center, Flex } from "@chakra-ui/react"
import { FC } from "react"
const FooterNav: FC = () => {
    return (
        <Center as="footer" pos="absolute" bottom={0} left={0} right={0}>
            <Flex as="nav">
                <p>:TODO:</p>
            </Flex>
        </Center>
    )
}
export default FooterNav
