import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { login } from "@/lib/actions";

export default function LoginForm() {
    return (
        <form action={login} className="space-y-3 flex flex-col items-center">
                <Input type="email" placeholder="örnek@mail.com" name="email" required />
                <SubmitButton type="submit" size="sm" className="w-60">Email ile oturum aç</SubmitButton>
        </form>
    )
}