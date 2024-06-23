'use client'
import Select from '@/components/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


const Range = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const range = searchParams.get('range') ?? 'last30days'

    const handleChange = (e) => {
        const params = new URLSearchParams()
        params.set('range', e.target.value)
        replace(`${pathName}?${params.toString()}`)
    }
  return (
      <Select value={range} onChange={handleChange}>
          <option value="last24hours">Son 24 Saat</option>
          <option value="last7days">Son 7 Gün</option>
          <option value="last30days">Son 30 Gün</option>
          <option value="last12months">Son 12 Ay</option>
    </Select>
  )
}

export default Range