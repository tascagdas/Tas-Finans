import BaseTrend from "@/components/trend"
const Trend = async ({ type, displayName }) => {
    const response = await fetch(`http://localhost:3100/trends/${type}`);
    const { amount, prevAmount } = await response.json();
    return (
        <BaseTrend amount={amount} type={type} prevAmount={prevAmount} displayName={displayName} />
    )
}

export default Trend