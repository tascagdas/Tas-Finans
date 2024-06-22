import { z } from "zod";
import { categories, types } from "./consts";

const categoryValues = categories.map(category => category.value);

export const transactionSchema = z.object({
    type: z.enum(types.map(t => t.value)),
    category: z.preprocess(val => val?.length ? val : undefined, z.string().optional()),
    amount: z.coerce.number().min(1, {
        message: "Miktar 1'den küçük olamaz."
    }),
    description: z.string().optional(),
    transaction_date: z.string().refine(
        val => !isNaN(Date.parse(val)),
        {
            message: "Geçerli bir tarih giriniz."
        }
    )
}).refine((data) => {
    if (data.type == 'Expense') {
        return data.category != undefined && categoryValues.includes(data.category)
    }
    return true;
}, {
    path: ['category'],
    message: 'Giderler için kategori girilmelidir.'
})
