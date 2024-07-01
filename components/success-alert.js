import { CheckSquare } from "lucide-react"
import Alert from "./alert"


const SuccessAlert = ({ children }) => {
    return (
        <Alert
            icon={
                <CheckSquare className="text-green-700 dark:text-green-400 w-6 h-6" />
            }
            title={
                <span className="text-green-700 dark:text-green-400">
                    Başarılı
                </span>
            }>
            <span className="text-green-700 dark:text-green-400">
                {children}
            </span>
        </Alert>
    )
}

export default SuccessAlert