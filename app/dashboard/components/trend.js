import BaseTrend from "@/components/trend"
import { createClient } from "@/lib/supabase/server"
const Trend = async ({ type, displayName }) => {
    
    const supabase = createClient()

    let { data, error } = await supabase
        .rpc('calculate_total', {
            type_arg: type
        })
    if (error) throw new Error('Trend verisi alınamadı.')

    const amount = data ?? 0


    return (
        <BaseTrend amount={amount} type={type} prevAmount={amount-1000} displayName={displayName} />
    )
}

export default Trend