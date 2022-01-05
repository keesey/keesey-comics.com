import { VFC } from "react";
export interface Props {
    abbreviate?: boolean
    amount: number
}
const Price: VFC<Props> = ({ abbreviate, amount }) => {
    if (isNaN(amount) || amount === null) {
        return null
    }
    const text = amount.toFixed(2);
    const displayedText = abbreviate ? text.replace(/\.00$/, "") : text
    if (text !== displayedText) {
        return (
            <span title={`$${text} (USD)`}>
                <abbr title="United States Dollars">$</abbr>
                {displayedText}
            </span>
        )
    }
    return (
        <>
            <abbr title="United States Dollars">$</abbr>
            {text}
        </>
    )
}
export default Price
