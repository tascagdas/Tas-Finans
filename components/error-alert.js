import { FileWarning } from "lucide-react"
import Alert from "./alert"


const ErrorAlert = ({ children }) => {
    return (
        <Alert
            icon={
                <FileWarning className="text-red-700 dark:text-red-400 w-6 h-6" />
            }
            title={
                <span className="text-red-700 dark:text-red-400">
                    Hata
                </span>
            }
        >
            <span className="text-red-700 dark:text-red-400">
                {children}
            </span>
        </Alert>
    )
}

export default ErrorAlert