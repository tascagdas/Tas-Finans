'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import { categories, types } from "@/lib/consts"
import { transactionSchema } from "@/lib/validation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { createTransaction, purgeTransactionListCache } from "@/lib/actions";
import FormError from "@/components/form-error"

const TransactionForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        mode: "onTouched",
        resolver: zodResolver(transactionSchema)
    });

    const router = useRouter()

    const [isSaving, setSaving] = useState(false)

    const onSubmit = async (data) => {
        setSaving(true)
        try {
            await createTransaction(data)
            // await purgeTransactionListCache()
            router.push('/dashboard')
        } finally {
            setSaving(false)
        }
    }


  return (
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <Label className="mb-1">Tip</Label>
                  <Select {...register("type")}>
                      {types.map(type => <option key={type.value} value={type.value}>{ type.displayName }</option>)}
                  </Select>
                  <FormError error={errors.type} />
              </div>
              <div>
                  <Label className="mb-1">Kategori</Label>
                  <Select {...register("category")}>
                      {categories.map(category => <option key={category.value} value={category.value}>{category.displayName}</option>)}
                  </Select>
                  <FormError error={errors.category} />
              </div>
              <div>
                  <Label className="mb-1">İşlem Tarihi</Label>
                  <Input placeholder="YYYY-AA-GG" {...register("transaction_date")} /> 
                  <FormError error={errors.transactionDate} />
              </div>
              <div>
                  <Label className="mb-1">İşlem Tutarı</Label>
                  <Input type="number" {...register("amount")} />
                  <FormError error={errors.amount} />
              </div>
              <div className="col-span-1 md:col-span-2">
                  <Label className="mb-1">İşlem Açıklaması</Label>
                  <Input type="text" {...register("description")} />
                  <FormError error={errors.description}/>
              </div>
          </div>
          <div className="flex justify-end">
              <Button type="submit" disabled={isSaving}>Kaydet</Button>
          </div>
    </form>
  )
}

export default TransactionForm