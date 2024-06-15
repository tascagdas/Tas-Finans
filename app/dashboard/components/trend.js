import BaseTrend from "@/components/trend"
const Trend = async ({ type, displayName }) => {
    const response = await fetch(`${process.env.API_URL}/trends/${type}`);
    const { amount, prevAmount } = await response.json();
    return (
        <BaseTrend amount={amount} type={type} prevAmount={prevAmount} displayName={displayName} />
    )
}

export default Trend