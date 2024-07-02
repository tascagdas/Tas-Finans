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
import { createTransaction, updateTransaction } from "@/lib/actions";
import FormError from "@/components/form-error"

const TransactionForm = ({initialData}) => {

    const { register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors } } = useForm({
        mode: "onTouched",
            resolver: zodResolver(transactionSchema),
            defaultValues: initialData ?? {
            transaction_date: new Date().toISOString().split('T')[0]
        }
    });

    const router = useRouter()

    const [isSaving, setSaving] = useState(false)

    const [lastError, setLastError] = useState();

    const type = watch('type')

    const isEditing = Boolean(initialData)

    const onSubmit = async (data) => {
        // console.log(data)
        // return
        setSaving(true)
        setLastError()
        try {
            if (isEditing) {
                await updateTransaction(initialData.id,data)
            } else {
                await createTransaction(data)
            }
            router.push('/dashboard')
        } catch(error) {
            setLastError(error?.message)
        }finally {
            setSaving(false)
        }
    }


  return (
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <Label className="mb-1">Tip</Label>
                  <Select {...register("type", {
                      onChange: (e) => {
                          if (e.target.value != 'Expense') {
                            setValue('category','')
                          }
                      }
                  })}>
                      {types.map(type => <option key={type.value} value={type.value}>{ type.displayName }</option>)}
                  </Select>
                  <FormError error={errors.type?.message} />
              </div>
              <div>
                  <Label className="mb-1">Kategori</Label>
                  <Select {...register("category")} disabled={type != 'Expense'}>
                      <option value="" >Kategori Seçiniz</option>
                      {categories.map(category => <option key={category.value} value={category.value}>{category.displayName}</option>)}
                  </Select>
                  <FormError error={errors.category?.message} />
              </div>
              <div>
                  <Label className="mb-1">İşlem Tarihi</Label>
                  <Input placeholder="YYYY-AA-GG" {...register("transaction_date")} disabled={isEditing } /> 
                  <FormError error={errors.transaction_date?.message} />
              </div>
              <div>
                  <Label className="mb-1">İşlem Tutarı</Label>
                  <Input type="number" {...register("amount")} />
                  <FormError error={errors.amount?.message} />
              </div>
              <div className="col-span-1 md:col-span-2">
                  <Label className="mb-1">İşlem Açıklaması</Label>
                  <Input type="text" {...register("description")} />
                  <FormError error={errors.description?.message}/>
              </div>
          </div>
          <div className="flex justify-between items-center">
              <div>
                  {lastError && <FormError error={lastError} />}
              </div>
              <Button type="submit" disabled={isSaving}>Kaydet</Button>
          </div>
    </form>
  )
}

export default TransactionForm