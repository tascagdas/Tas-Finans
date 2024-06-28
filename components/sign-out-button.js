'use client'
import { LogOut } from "lucide-react";
import SubmitButton from "./submit-button";
import { signOut } from "@/lib/actions";

export default function SignOtButton () {
  return (
      <form action={signOut}>
      <SubmitButton variant="ghost" size="sm">
        <LogOut className="w-6 h-6"/>
          </SubmitButton>
    </form>
  )
}