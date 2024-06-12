import { useFormatCurrency } from '@/hooks/use-format-currency'
import { MoveRight, TrendingDown, TrendingUp } from 'lucide-react'
import { useMemo } from 'react'

const Trend = ({ type, amount, prevAmount, displayName }) => {
    const colorClasses = {
        'Income': 'text-green-700 dark:text-green-300',
        'Expense': 'text-red-700 dark:text-red-300',
        'Investment': 'text-indigo-700 dark:text-indigo-300',
        'Saving': 'text-purple-700 dark:text-purple-300',
    }

    const calcPercentageChange = (amount, prevAmount) => {
        if (!prevAmount || !amount) {
            return 0
        }
        return ((amount - prevAmount) / prevAmount) * 100
    }

    const percentageChange = useMemo(
        () => calcPercentageChange(amount, prevAmount).toFixed(0),
        [amount, prevAmount]
    )

    const formattedAmount = useFormatCurrency(amount)

    return (
        <>
            <div>
                <div className={`font-semibold ${colorClasses[type]}`}>
                    {displayName}
                </div>
                <div className='text-2xl font-semibold text-black dark:text-white mb-2'>
                    {formattedAmount}
                </div>
                <div className='flex space-x-1 items-center text-sm'>
                    {percentageChange < 0 && <TrendingDown className='text-red-700 dark:rext-red-400' />}
                    {percentageChange == 0 && <MoveRight />}
                    {percentageChange > 0 && <TrendingUp className='text-green-700 dark:rext-green-400' />}
                    <div>
                        {percentageChange}%  {percentageChange == 0 && "değişim yok"}{percentageChange < 0 && "azalma"}{percentageChange > 0 && "artış"}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trend