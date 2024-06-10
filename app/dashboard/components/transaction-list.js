import TransactionItem from '@/components/transaction-item'
import React from 'react'

const TransactionList = async () => {
    const response = await fetch('http://localhost:3100/transactions'
    )
    const transactions = await response.json()

  return (
      <section className='space-y-4'>
          {transactions.map(transaction => <div key={transaction.id}>
              <TransactionItem type={transaction.type} category={transaction.category} description={transaction.description} amount={transaction.amount}/>
          </div>)}
    </section>
  )
}

export default TransactionList