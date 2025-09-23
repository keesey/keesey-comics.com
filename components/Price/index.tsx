import styles from "./index.module.scss"
export interface PriceProps {
  abbreviate?: boolean
  amount: number
}
export const Price = ({ abbreviate, amount }: PriceProps) => {
  if (isNaN(amount) || typeof amount !== "number") {
    return null
  }
  const isNegative = amount < 0
  const text = Math.abs(amount).toFixed(2)
  const displayedText = abbreviate ? text.replace(/\.00$/, "") : text
  if (isNegative || text !== displayedText) {
    return (
      <span
        className={isNegative ? styles.negative : undefined}
        title={`$${text} (USD)`}
      >
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
