import { useMemo } from "react"

export const useFormatCurrency = (amount) => {
    const formatCurrency = (amount) =>
        new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2, }).format(amount)

    return useMemo(
        ()=>formatCurrency(amount),[amount]
    )
}