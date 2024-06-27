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


export async function deleteTransaction(id) {
    const supabase = createClient();
    const { error } = await supabase.from('transactions')
        .delete()
        .eq('id', id)
    if (error) throw new Error(`${id} id'li işlem silinemedi.`)
    revalidatePath('/dashboard')
}

export async function updateTransaction(id, formData) {

    const validated = transactionSchema.safeParse(formData)
    if (!validated.success) {
        throw new Error('Geçersiz işlem bilgileri')
    }

    const { error } = await createClient()
        .from('transactions')
        .update(validated.data)
        .eq('id', id)
    if (error) {
        throw new Error('İşlem eklenirken bir hata oluştu. Lütfen tekrar deneyiniz.')
    }
    revalidatePath('/dashboard')

}

export async function login(prevState, formData) {
    if ('tascagdas@gmail.com' === formData.get('email')) {
        return {
            message: 'Giris basarili'
        }
    }
    return {
        error: true,
        message: 'Email adresi yanlis'
    }
}