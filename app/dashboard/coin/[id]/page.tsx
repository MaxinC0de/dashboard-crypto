import { getCoinChart, getTopCoins } from "@/lib/coingecko"
import Link from "next/link"
import CoinChart from "./CoinChart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function Page({ params, searchParams }) {
    const { id } = await params
    const resolvedSearchParams = await searchParams
    const days = parseInt(resolvedSearchParams.days)
    const [data, coins] = await Promise.all([
        getCoinChart({ id, days }), 
        getTopCoins()
    ])

    const daysParams = [1, 7, 30, 90]

    const coin = coins.find((c) => c.id === id)

    if (!coin) return null

    const change = coin.price_change_percentage_24h ?? 0
    const isUp = change > 0

    const chartData = data?.prices.map(([timestamp, price]) => (
        { 
            price,
            timestamp: new Date(timestamp).toLocaleDateString("fr-FR"), 
        }
    )) ?? []

    return(
        <div className="flex flex-col">
            <Link href="/dashboard" className="inline-flex w-fit bg-black text-white px-4 p-2 rounded-md">Retour dashboard</Link>
            <Card className="mt-12 p-4 border border-zinc-200 bg-white shadow-sm ring-0">
                <CardHeader className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                            <img src={coin.image} className="size-7" alt="" />
                            <span className="font-medium text-2xl">{coin.name}</span>
                            <span className="text-2xl font-medium text-zinc-400">{coin.symbol.toUpperCase()}</span>
                        </div>
                        <Badge className={`rounded-sm h-6 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                            {isUp && "+"}
                            {change.toFixed(2)}%
                        </Badge>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <span className="text-2xl font-medium">{coin.current_price.toLocaleString("fr-FR", {
                                style: "currency",
                                currency: "EUR"
                            })}
                        </span>
                        <div>
                            {daysParams.map((value) => (
                                <Link key={value} href={`/dashboard/coin/${id}?days=${value}`} className="ml-2">
                                    <Badge className={`rounded-sm border border-zinc-200 shadow-xs ${value === days ? "bg-black text-white" : "bg-white"}`}>{value} J</Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CoinChart chartData={chartData} />
                </CardContent>
            </Card>
        </div>
    )
}