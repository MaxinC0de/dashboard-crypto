import { getCoinChart, getTopCoins } from "@/lib/coingecko"
import Link from "next/link"
import CoinChart from "./CoinChart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function Page({ params }) {
    const { id } = await params
    const [data, coins] = await Promise.all([
        getCoinChart({ id }), 
        getTopCoins()
    ])

    const coin = coins.find((c) => c.id === id)

    const change = coin.price_change_percentage_24h ?? 0
    const isUp = change > 0

    const chartData = data?.prices.map(([timestamp, price]) => (
        { 
            price,
            timestamp: new Date(timestamp).toLocaleDateString("fr-FR"), 
        }
    ))
    if (!coin) return
    return(
        <div className="flex flex-col">
            <Link href="/dashboard" className="bg-black text-white px-4 p-2 rounded-md">Retour dashboard</Link>
            <Card className="mt-12 p-4 border border-zinc-200 bg-white shadow-sm ring-0">
                <CardHeader className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <img src={coin.image} className="size-7" alt="" />
                        <span className="font-medium text-2xl">{coin.name}</span>
                        <span className="text-2xl font-medium text-zinc-400">{coin.symbol}</span>
                    </div>
                    <Badge className={`rounded-sm h-6 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                        {isUp && "+"}
                        {change.toFixed(2)}%
                    </Badge>
                </CardHeader>
                <CardContent>
                    <CoinChart chartData={chartData} />
                </CardContent>
            </Card>
        </div>
    )
}