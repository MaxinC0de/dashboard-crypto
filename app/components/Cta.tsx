import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
    return(
        <div className="mt-12 bg-zinc-950 text-white py-12 md:py-16 px-4 text-center">
            <h2 className="font-medium text-2xl">Prêt à suivre le marché ?</h2>
            <p className="my-4 text-zinc-300">Connecte-toi et accède à ton dashboard en quelques secondes.</p>
            <Link href="/login" className="flex items-center bg-white hover:bg-white/90 transition-all duration-200 col text-black py-2 px-4 text-center inline-flex rounded-md mx-auto cursor-pointer font-medium">Accéder au dashboard<ArrowRight className="size-4 mt-1 ml-1" /></Link>
        </div>
    )
}