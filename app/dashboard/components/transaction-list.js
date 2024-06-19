import Seperator from '@/components/seperator'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import { createClient } from '@/lib/supabase/server'
import React from 'react'

const groupAndSumTransactionsByDate = (transactions) => {
  const grouped = {}
  for (const transaction of transactions) {
    const date = transaction.transaction_date.split('T')[0]
    if (!grouped[date]) {
      grouped[date] = {
        transactions: [], amount: 0
      }
    }
    grouped[date].transactions.push(transaction)
    const amount = transaction.type == 'Expense' ? - transaction.amount : transaction.amount
    grouped[date].amount += amount
  }
  return grouped
}

const TransactionList = async () => {
  const supabase = createClient();
  const { data: transactions, error } = await supabase
    .from('transactions')
    .select('*')
  .order('transaction_date',{ascending: false})
  const grouped = groupAndSumTransactionsByDate(transactions)

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