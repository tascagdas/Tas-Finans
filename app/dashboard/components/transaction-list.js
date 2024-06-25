'use client'
import Button from '@/components/button'
import Seperator from '@/components/seperator'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import { fetchTransactions } from '@/lib/actions'
import { groupAndSumTransactionsByDate } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import { useState } from 'react'


export default function TransactionList ({ range, initialTransactions }) {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [offset, setOffset] = useState(initialTransactions.length + 1)
  const [buttonHidden, setButtonHidden] = useState(initialTransactions.length === 0)
  const [loading, setLoading] = useState(false)
  const grouped = groupAndSumTransactionsByDate(transactions)


  const handleClick = async (e) => {
    setLoading(true)
    let nextTransactions = null
    try {
      nextTransactions = await fetchTransactions(range, offset, 10)
      setButtonHidden(nextTransactions.length === 0)
      setOffset(prevValue => prevValue + 10)
      setTransactions(prevTransactions => [...prevTransactions, ...nextTransactions])
    } finally {
      setLoading(false)
    }

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
      {transactions.length === 0 && <div className='text-center text-gray-700 dark:text-gray-400'>Daha fazla işlem bulunamadı</div>}
      {!buttonHidden && <div className='flex justify-center'>
        <Button onClick={handleClick} variant='ghost' disabled={loading}>
          <div className="flex items-center space-x-1">
            {loading && <LoaderCircle className='animate-spin' />}
            <div>Daha fazla</div>
          </div>
        </Button>
      </div>}
    </div>
  )
}
