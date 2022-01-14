import { VFC } from "react"
export interface Props {
    abbreviate?: boolean
    amount: number
}
const Price: VFC<Props> = ({ abbreviate, amount }) => {
    if (isNaN(amount) || amount === null) {
        return null
    }
    const isNegative = amount < 0
    const text = Math.abs(amount).toFixed(2)
    const displayedText = abbreviate ? text.replace(/\.00$/, "") : text
    if (isNegative || text !== displayedText) {
        return (
            <span title={`$${text} (USD)`} className={isNegative ? "negative" : undefined}>
                <abbr title="United States Dollars">$</abbr>
                {displayedText}
            </span>
        )
    }
    return (
        <>
            <abbr title="United States Dollars">$</abbr>
            {displayedText}
        </>
    )
}
export default Price
