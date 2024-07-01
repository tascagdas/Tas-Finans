'use client'
import Alert from "@/components/alert";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { uploadAvatar } from "@/lib/actions";
import { CheckSquare, FileWarning } from "lucide-react";
import { useFormState } from "react-dom";


const initialState = {
    message: '',
    error: false
}

export default function Page() {
    const [state, formAction] = useFormState(uploadAvatar, initialState)
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Profil Resmi</h1>
            <form className="space-y-4" action={formAction}>
                {state?.error && <Alert icon={<FileWarning className="text-red-700 dark:text-red-400 w-6 h-6" />} title={<span className="text-red-700 dark:text-red-400">Hata</span>}><span className="text-red-700 dark:text-red-400">{state?.message}</span></Alert>}
                {!state?.error && state.message.length > 0 && <Alert icon={<CheckSquare className="text-green-700 dark:text-green-400 w-6 h-6" />} title={<span className="text-green-700 dark:text-green-400">Hello</span>}><span className="text-green-700 dark:text-green-400">Başarılı</span></Alert>}
                <Input type='file' name='file' id='file' />
                <SubmitButton>Resmi Gönder</SubmitButton>
            </form>
        </>
    )
}