import Button from "@/components/button"
import Input from "@/components/input"
import Label from "@/components/label"
import Select from "@/components/select"
import { categories, types } from "@/lib/consts"


const TransactionForm = () => {
  return (
      <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <Label className="mb-1">Tip</Label>
                  <Select>
                      {types.map(type => <option key={type}>{ type }</option>)}
                  </Select>
              </div>
              <div>
                  <Label className="mb-1">Kategori</Label>
                  <Select>
                      {categories.map(categorie => <option key={categorie}>{categorie}</option>)}
                  </Select>
              </div>
              <div>
                  <Label className="mb-1">İşlem Tarihi</Label>
                 <Input/> 
              </div>
              <div>
                  <Label className="mb-1">İşlem Tutarı</Label>
                  <Input type="number" />
              </div>
              <div className="col-span-2">
                  <Label className="mb-1">İşlem Açıklaması</Label>
                  <Input type="text" />
              </div>
          </div>
          <div className="flex justify-end">
              <Button type="submit">Kaydet</Button>
          </div>
    </form>
  )
}

export default TransactionForm