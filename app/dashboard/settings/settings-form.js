'use client'
import DateRangeSelect from "@/components/date-range-select"
import ErrorAlert from "@/components/error-alert"
import FormError from "@/components/form-error"
import Input from "@/components/input"
import Label from "@/components/label"
import SubmitButton from "@/components/submit-button"
import SuccessAlert from "@/components/success-alert"
import { updateSettings } from "@/lib/actions"
import { useFormState } from 'react-dom'

const initialState = {
    message: '',
    error: false,
    errors:{}
}

export default function SettingsForm({ defaults }) {
    const [state, formAction] = useFormState(updateSettings, initialState)
    return <form className="space-y-4" action={formAction}>
        {state?.error && <ErrorAlert>{state?.message}</ErrorAlert>}
        {!state?.error && state?.message?.length > 0 && <SuccessAlert>{state?.message}</SuccessAlert>}
        <Label htmlFor="fullName">Kullanıcı Adı:</Label>
        <Input type="text" name="fullName" ıd="fullName" placeholder="Ad Soyad" defaults={defaults?.fullName} />
        {state?.errors['fullName']?.map(error => <FormError key={`Kullanıcı adı ${error}`} error={error} />)}
        <Label htmlFor="defaultView">Varsayılan işlem süresi:</Label>
        <DateRangeSelect name="defaultView" id="defaultView" defaultValue={defaults?.defaultView} />
        {state?.errors['defaultView']?.map(error => <FormError key={`Varsayılan süre ${error}`} error={error} />)}
        <SubmitButton>Update Settings</SubmitButton>
    </form>
}