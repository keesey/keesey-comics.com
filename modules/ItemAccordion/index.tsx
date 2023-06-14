"use client"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
export type ItemAccordionItem = {
    content: ReactNode
    heading: ReactNode
    id: string | number
}
export type ItemAccordionProps = {
    items: readonly ItemAccordionItem[]
}
export const ItemAccordion: FC<ItemAccordionProps> = ({ items }) => {
    return (
        <Accordion allowMultiple>
            {items.map(({ content, heading, id }) => (
                <AccordionItem as="section" key={id}>
                    <AccordionButton as="header">
                        <Text as="h3" flex={1} textAlign="left">
                            {heading}
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>{content}</AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
