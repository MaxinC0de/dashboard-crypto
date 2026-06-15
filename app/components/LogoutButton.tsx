"use client"

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter()
    const handleClick = async () => {
        const supabase = createClient()
        await supabase.auth.signOut()
        router.push("/")
        router.refresh()
    }
    return(
        <Button onClick={handleClick} className="bg-black text-white cursor-pointer">Se déconnecter</Button>
    )
}