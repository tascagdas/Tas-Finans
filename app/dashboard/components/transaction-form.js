'use client'

import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import { categories, types } from "@/lib/consts"
import { useForm } from "react-hook-form"


const TransactionForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit= (data)=> console.log(data)


  return (
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <Label className="mb-1">Tip</Label>
                  <Select {...register("type")}>
                      {types.map(type => <option key={type}>{ type }</option>)}
                  </Select>
              </div>
              <div>
                  <Label className="mb-1">Kategori</Label>
                  <Select {...register("category")}>
                      {categories.map(categorie => <option key={categorie}>{categorie}</option>)}
                  </Select>
              </div>
              <div>
                  <Label className="mb-1">İşlem Tarihi</Label>
                  <Input {...register("transactionDate")} /> 
              </div>
              <div>
                  <Label className="mb-1">İşlem Tutarı</Label>
                  <Input type="number" {...register("amount")} />
              </div>
              <div className="col-span-2">
                  <Label className="mb-1">İşlem Açıklaması</Label>
                  <Input type="text" {...register("transactionDescription")} />
              </div>
          </div>
          <div className="flex justify-end">
              <Button type="submit">Kaydet</Button>
          </div>
    </form>
  )
}

export default TransactionForm