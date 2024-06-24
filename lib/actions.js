'use server'
import { revalidatePath } from 'next/cache'
import { createClient } from './supabase/server'
import { transactionSchema } from './validation'

export async function purgeTransactionListCache() {
    revalidateTag('transaction-list')
}

export async function createTransaction(formData) {

    //Validasyonlarla ilgili işlemler.
    const validated = transactionSchema.safeParse(formData)
    if (!validated.success) {
        throw new Error('Geçersiz işlem bilgileri')

    }

    const { error } = await createClient().from('transactions').insert(validated.data)
    if (error) {
        throw new Error('İşlem eklenirken bir hata oluştu. Lütfen tekrar deneyiniz.')
    }
    revalidatePath('/dashboard')

}

export async function fetchTransactions(range, offset = 0, limit = 10) {
    const supabase = createClient();
    let { data, error } = await supabase
        .rpc('fetch_transactions', {
            limit_arg: limit,
            offset_arg: offset,
            range_arg: range
        })
    if (error) throw new Error("can't fetch transactions")
    
    return data
}