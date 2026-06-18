import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return(
        <section className="py-16 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Suis le marché crypto en un coup d'œil</h1>
            <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-xl">Dashboard crypto gratuit, variations 24h et courbes sur 7 jours - le tout dans un dashboard minimaliste, sans prise de tête</p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/login">
                    Accéder au dashboard
                    <ArrowRight />
                </Link>
            </Button>
        </section>
    )
}