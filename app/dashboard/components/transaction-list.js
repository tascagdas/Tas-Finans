import Seperator from '@/components/seperator'
import TransactionItem from '@/components/transaction-item'
import TransactionSummaryItem from '@/components/transaction-summary-item'
import { createClient } from '@/lib/supabase/server'
import { groupAndSumTransactionsByDate } from '@/lib/utils'


const TransactionList = async ({ range }) => {
  const supabase = createClient();
  let { data: transactions, error } = await supabase
    .rpc('fetch_transactions', {
      // limit_arg,
      // offset_arg,
      range_arg: range
    })
  if (error) throw new Error("can't fetch transactions")
  
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