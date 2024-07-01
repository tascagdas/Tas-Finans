import Alert from "@/components/alert";
import Input from "@/components/input";
import SubmitButton from "@/components/submit-button";
import { uploadAvatar } from "@/lib/actions";
import { CheckSquare, FileWarning } from "lucide-react";

export default function Page() {
    return (
        <>
            <h1 className="text-4xl font-semibold mb-8">Profil Resmi</h1>
            <form className="space-y-4" action={uploadAvatar}>
                <Alert icon={<FileWarning className="text-red-700 dark:text-red-400 w-6 h-6" />} title={<span className="text-red-700 dark:text-red-400">Hello</span>}><span className="text-red-700 dark:text-red-400">Hello</span></Alert>
                <Alert icon={<CheckSquare className="text-green-700 dark:text-green-400 w-6 h-6" />} title={<span className="text-green-700 dark:text-green-400">Hello</span>}><span className="text-green-700 dark:text-green-400">Hello</span></Alert>
                <Input type='file' name='file' id='file'/>
                <SubmitButton>Resmi Gönder</SubmitButton>
            </form>
        </>
    )
}