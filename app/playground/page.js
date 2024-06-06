import PageHeader from '@/components/page-header'
import Trend from '@/components/trend'


const Page = () => {
  return (
      <main className='space-y-8'>
          <h1 className='text-4xl mt-8'>
              Playground
          </h1>

          <div>
              <h2>PageHeader</h2>
              <hr className='mb-4 border-slate-300 dark:border-slate-700' />
              <div>
                  <PageHeader/>
              </div>
          </div>
          <div>
              <h2>Trend</h2>
              <hr className='mb-4 border-slate-300 dark:border-slate-700' />
              <div className='flex space-x-4'>
                  <Trend type="Income" amount={1000} />
                  <Trend type="Expense" amount={1700} />
                  <Trend type="Investment" amount={300} />
                  <Trend type="Saving" amount={700} />
              </div>
          </div>
    </main>
  )
}

export default Page