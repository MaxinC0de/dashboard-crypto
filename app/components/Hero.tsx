import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return(
        <section className="py-16 max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight max-w-3xl">Suis le marché crypto en un coup d'œil</h1>
            <p className="mt-2 text-xs font-medium text-zinc-800 tracking-tight">Dashboard crypto gratuit, variations 24h et courbes sur 7 jours - le tout dans un dashboard minimaliste, sans prise de tête</p>
            <Link href="/login" className="flex items-center hover:-translate-y-0.5 transition-all duration-200 font-medium mt-6">
                <span className="text-lg text-zinc-600 max-w-xl">Accéder au dashboard</span>
                <ArrowRight className="size-4 mt-1 ml-1 text-zinc-800" />
            </Link>
        </section>
    )
}