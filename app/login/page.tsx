"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { createClient } from "@/lib/client"
import { useRouter } from "next/navigation"

export default function Page() {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        const supabase = createClient()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setError("HO C EST PAS BON LAAAA GROS NAZE QUI SE SOUVIENT PAS DE SES CREDENTIALS TU PUES DU CUL")
            setLoading(false)
            return
        }

        router.push("/dashboard")
        router.refresh()
    }
    return(
        <main className="w-screen h-screen flex justify-center bg-black px-4 py-10 mx-auto">
            <Card className="w-[440px] h-[400px] p-10 bg-[#191919] border border-white/10 rounded-xl">
                <div className="text-center text-white">
                    <span className="text-white font-semibold text-xl">Cal.com</span>
                    <p className="text-gray-300 text-sm my-4">Bon retour ! Connectez-vous pour continuer</p>
                    
                    <form onSubmit={handleSubmit}>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <Label htmlFor="E-mail" className="mb-2">E-mail</Label>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 border-white/10 bg-[#1F1F1F] focus-visible:ring-0 focus-visible:border-white/20" />

                        <Label htmlFor="Mot de passe" className="mt-6 mb-2">Mot de passe</Label>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-3 border-white/10 bg-[#1F1F1F] focus-visible:ring-0 focus-visible:border-white/20" />

                        <Button type="submit" disabled={loading} className="mt-8 bg-white cursor-pointer hover:bg-white/85 w-full text-black">{loading ? "Connexion..." : "Continuer"}</Button>
                    </form>
                </div>
            </Card>
        </main>
    )
}