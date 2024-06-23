import { Suspense } from "react"
import TransactionList from "./components/transaction-list"
import TransactionListFallback from "./components/transaction-list-fallback"
import Trend from "./components/trend"
import TrendFallback from "./components/trend-fallback"
import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { sizes, variants } from "@/lib/variants"
import { ErrorBoundary } from "react-error-boundary"
import { types } from "@/lib/consts"
import Range from "./components/range"


const Page = async ({ searchParams }) => {
  const range = searchParams?.range ?? 'last30days'
  return (
    <>
      <section className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-semibold">Özet</h1>
        <aside>
          <Range/>
        </aside>
      </section>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {types.map(type => <ErrorBoundary key={type.value} fallback={<div className="text-orange-300">{type.displayName } trend verisi alınamadı</div>}>
          <Suspense fallback={<TrendFallback />}>
            <Trend type={type.value} displayName={type.displayName} range={range} />
          </Suspense>
        </ErrorBoundary> )}
      </section>

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl">İşlemler</h2>
        <Link href="/dashboard/transaction/add" className={`flex items-center space-x-1 ${variants['outline']} ${sizes['sm']}`}>
          <PlusCircle className="w-4 h-4" />
          <div>Ekle</div>
        </Link>
      </section>

      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList range={range} />
      </Suspense>
    </>
  )
}

export default Page