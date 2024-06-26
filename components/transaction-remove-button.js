import { deleteTransaction } from "@/lib/actions";
import Button from "./button";
import { Loader, X } from "lucide-react";
import { useState } from "react";

function TransactionRemoveButton({ id }) {
    const [loading, setLoading] = useState()
    const [confirmed, setConfirmed] = useState()
    const handleClick = async () => {
        if (!confirmed) {
            setConfirmed(true)
            return
        }
        try {
            setLoading(true)
            await deleteTransaction(id)
            // Burada parent componente listenin degismesi icin bilgi gonderilmesi lazim
        } finally {
            setLoading(false)
        }
    }
    return <Button size="xs" variant={!confirmed ? 'ghost' : 'danger'} aria-disabled={loading} onClick={handleClick}>
        {!loading && <X className="h-4 w-4" />}
        {loading && <Loader className="h-4 w-4 animate-spin" />}
    </Button>
}

export default TransactionRemoveButton;