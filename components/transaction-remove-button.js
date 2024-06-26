import { deleteTransaction } from "@/lib/actions";
import Button from "./button";
import { Loader, Trash } from "lucide-react";
import { useState } from "react";

function TransactionRemoveButton({ id, onRemoved }) {
    const [loading, setLoading] = useState()
    const [confirmed, setConfirmed] = useState()
    const handleClick = async () => {
        if (!confirmed) {
            setConfirmed(true)
            setTimeout(() => setConfirmed(false), 5000);
            return
        }
        try {
            setLoading(true)
            await deleteTransaction(id)
            onRemoved()
        } finally {
            setLoading(false)
        }
    }
    return <Button size="xs" variant={!confirmed ? 'ghost' : 'danger'} aria-disabled={loading} onClick={handleClick}>
        {!loading && <Trash className="h-4 w-4" />}
        {loading && <Loader className="h-4 w-4 animate-spin" />}
    </Button>
}

export default TransactionRemoveButton;