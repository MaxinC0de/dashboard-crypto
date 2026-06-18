import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Cta() {
    return(
        <div className="mt-12 bg-zinc-950 text-white py-12 md:py-16 px-4 text-center">
            <h2 className="font-medium text-2xl">Prêt à suivre le marché ?</h2>
            <p className="my-4 text-zinc-300">Connecte-toi et accède à ton dashboard en quelques secondes.</p>
            <Button asChild variant="secondary" size="lg" className="mx-auto">
                <Link href="/login">
                    Accéder au dashboard
                    <ArrowRight />
                </Link>
            </Button>
        </div>
    )
}