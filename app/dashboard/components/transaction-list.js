'use client'
import Button from '@/components/button'
import Seperator from '@/components/seperator'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import { fetchTransactions } from '@/lib/actions'
import { groupAndSumTransactionsByDate } from '@/lib/utils'
import { useState } from 'react'


const TransactionList = async ({ range, initialTransactions }) => {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [offset, setOffset] = useState(initialTransactions.length)

  const grouped = groupAndSumTransactionsByDate(transactions)


  const handleClick = async (e) => {
    const nextTransactions = await fetchTransactions(range, offset, 10)
    setOffset(prevValue => prevValue + 10)
    setTransactions(prevTransactions=>[...prevTransactions,...nextTransactions])
  }

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
      <div className='flex justify-center'>
        <Button onClick={handleClick} variant='ghost'>Daha fazla</Button>
      </div>
    </div>
  )
}

export default TransactionList