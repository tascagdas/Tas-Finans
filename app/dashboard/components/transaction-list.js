'use client'
import Seperator from '@/components/seperator'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import { groupAndSumTransactionsByDate } from '@/lib/utils'


const TransactionList = async ({ initialTransactions }) => {

  
  const grouped = groupAndSumTransactionsByDate(initialTransactions)

  return (
    <div className='space-y-8'>
      {
        Object.entries(grouped).map(([date, { transactions, amount }]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Seperator />
            <section className='space-y-4'>
              {transactions.map(transaction => <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>)}
            </section>
          </div>
        )
      }
    </div>
  )
}

export default TransactionList