'use client'
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";
import { useFormState } from "react-dom";

const initialState = {
    message: '',
    error: false
}

export default function LoginForm() {
    const [state, formAction] = useFormState(login, initialState)
    return (
        <form action={formAction} className="space-y-3 flex flex-col items-center">
            <Input type="email" placeholder="örnek@email.com" name="email" required />
            <SubmitButton type="submit" size="sm" className="w-60">Email ile oturum aç</SubmitButton>
            <p className={`${state?.error ? 'text-red-500' : 'text-green-500'}`}>
                {state?.message}
            </p>
        </form>
    )
}