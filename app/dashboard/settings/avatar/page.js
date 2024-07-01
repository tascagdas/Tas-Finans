'use client'
import ErrorAlert from "@/components/error-alert";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import SuccessAlert from "@/components/success-alert";
import { uploadAvatar } from "@/lib/actions";
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
                {state?.error && <ErrorAlert>{state?.message }</ErrorAlert>}
                {!state?.error && state.message.length > 0 && <SuccessAlert>{state?.message}</SuccessAlert>}
                <Input type='file' name='file' id='file' />
                <SubmitButton>Resmi Gönder</SubmitButton>
            </form>
        </>
    )
}