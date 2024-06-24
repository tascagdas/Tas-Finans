import { fetchTransactions } from "@/lib/actions"
import TransactionList from "./transaction-list"

const TransactionListWrapper = async ({ range }) => {
    const transactions = await fetchTransactions(range)
  return (
      <>
          <TransactionList initialTransactions={transactions} />
    </>
  )
}

export default TransactionListWrapper