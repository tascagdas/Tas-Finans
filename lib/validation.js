import { z } from "zod";
import { categories, types } from "./consts";

export const transactionSchema = z.object({
    type: z.enum(types.map(t => t.value)),
    category: z.enum(categories.map(c => c.value)),
    amount: z.coerce.number().min(1, {
        message: "Miktar 1'den küçük olamaz."
    }),
    description: z.string().min(1, {
        message: "Açıklama 1 karakterden uzun olmalıdır."
    }),
    transactionDate: z.string().refine(
        val => !isNaN(Date.parse(val)), {
        message: "Geçerli bir tarih giriniz."
    }
    )
});
