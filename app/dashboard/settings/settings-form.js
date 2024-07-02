'use client'
import ErrorAlert from "@/components/error-alert"
import SubmitButton from "@/components/submit-button"
import SuccessAlert from "@/components/success-alert"
import { updateSettings } from "@/lib/actions"
import { useFormState } from 'react-dom'

const initialState = {
    message: '',
    error: false
}

export default function SettingsForm({ defaults }) {
    const [state, formAction] = useFormState(updateSettings, initialState)
    return <form className="space-y-4" action={formAction}>
        {state?.error && <ErrorAlert>{state?.message}</ErrorAlert>}
        {!state?.error && state?.message.length > 0 && <SuccessAlert>{state?.message}</SuccessAlert>}
        <SubmitButton>Update Settings</SubmitButton>
    </form>
}