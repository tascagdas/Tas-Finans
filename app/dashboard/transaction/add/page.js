import React from 'react'
import TransactionForm from '../../components/transaction-form';


export const metadata = {
  title: "İşlem Ekle"
};

const Page = () => {
  return (<>
    <h1 className='text-4xl font-semibold mb-8'>
      İşlem ekle
    </h1>
    <TransactionForm/>
  </>

  )
}

export default Page