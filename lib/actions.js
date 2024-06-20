'use server'
import { revalidateTag } from 'next/cache'
import { createClient } from './supabase/server'

export async function purgeTransactionListCache() {
    revalidateTag('transaction-list')
}

export async function createTransaction(formData) {
    // Hatalarla ilgili işlemler

    //Validasyonlarla ilgili işlemler.
    console.log('formdata: Burada ::::::')
    console.log(formData)

    const { error } = await createClient().from('transactions').insert(formData)
}