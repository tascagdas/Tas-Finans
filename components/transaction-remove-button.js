import { deleteTransaction } from "@/lib/actions";
import Button from "./button";

function TransactionRemoveButton({id}) {
    return <Button onClick={async () => {
        await deleteTransaction(id)
    }}>x</Button>
}

export default TransactionRemoveButton;