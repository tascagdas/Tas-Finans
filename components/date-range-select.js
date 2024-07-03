import Select from '@/components/select'

export default function DateRangeSelect(props) {
    return <Select {...props}>
        <option value="last24hours">Son 24 Saat</option>
        <option value="last7days">Son 7 Gün</option>
        <option value="last30days">Son 30 Gün</option>
        <option value="last12months">Son 12 Ay</option>
    </Select>
}