import BaseTrend from "@/components/trend"
import { createClient } from "@/lib/supabase/server"
const Trend = async ({ type, displayName, range}) => {
    
    const supabase = createClient()

    let { data, error } = await supabase
        .rpc('calculate_total', {
            range_arg: range,
            type_arg: type
        })
    if (error) throw new Error('Trend verisi alınamadı.')

    const amounts = data[0]

    return (
        <BaseTrend amount={amounts.current_amount} type={type} prevAmount={amounts.previous_amount} displayName={displayName} />
    )
}

export default Trend