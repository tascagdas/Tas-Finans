import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";

export default function Page() {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Profil Resmi</h1>
            <form className="space-y-4">
                <Input type='file' name='file' id='file'/>
                <SubmitButton>Resmi Gönder</SubmitButton>
            </form>
        </>
    )
}