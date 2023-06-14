"use client"
import { Box, Flex } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
export type CoupletProps = {
    a: ReactNode
    b: ReactNode
}
export const Couplet: FC<CoupletProps> = ({ a, b }) => (
    <Flex>
        <Box>{a}</Box>
        <Box>{b}</Box>
    </Flex>
)
