'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'

export async function purgeTransactionListCache() {
    revalidateTag('transaction-list')
}

export async function createTransaction(formData) {

    //Validasyonlarla ilgili işlemler.

    const { error } = await createClient().from('transactions').insert(formData)
    if (error) {
        throw new Error('İşlem eklenirken bir hata oluştu. Lütfen tekrar deneyiniz.')
    }
    revalidatePath('/dashboard')

}