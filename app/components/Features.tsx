import { Card, CardHeader } from "@/components/ui/card";
import { LayoutList, LineChart, TrendingUp } from "lucide-react";

const icons = [<LayoutList />, <TrendingUp />, <LineChart />]
const titles = ["Top 10 en direct", "Variations 24h visibles", "Tendances sur 7 jours"]
const descriptions = ["Les cryptos les plus capitalisées, classées automatiquement. Avoir une vue de marché sans ouvrir 10 onglets.", "Prix en euros et badges résumant la dernière journée. Repérer les opportunités en un instant.", "Mini-graphiques sur le Bitcoin, l'Ethereum et les autres leaders. La tendance récente, pas seulement le prix du moment."]

export default function Features() {
    return(
        <div>
            <h2 className="font-medium text-2xl">Tout ce qu'il faut pour suivre le marché</h2>
            <p>Pas de jargon. Juste les chiffres qui comptent.</p>
            <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="border border-zinc-200 bg-white shadow-sm ring-0">
                        <CardHeader>
                            <div className="flex items-center gap-x-2">
                                {icons[i]}
                                <h2 className="font-medium text-lg">{titles[i]}</h2>
                            </div>
                            <p className="text-sm text-zinc-600">{descriptions[i]}</p>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}