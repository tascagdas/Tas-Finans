import PageHeader from '@/components/page-header'


const Page = () => {
  return (
      <main className='space-y-8'>
          <h1 className='text-4xl mt-8'>
              Playground
          </h1>

              <div>
                  <h2>PageHeader</h2>
                  <hr className='mb-4 border-slate-300 dark:border-slate-700' />
                  <div><PageHeader></PageHeader></div>
              </div>
    </main>
  )
}

export default Page