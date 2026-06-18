import { getCoinChart, getTopCoins } from "@/lib/coingecko"
import Link from "next/link"
import CoinChart from "./CoinChart"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatPrice, getChange } from "@/lib/format"
import type { Metadata } from "next"
import FavoriteButton from "@/app/components/FavoriteButton"

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ id: string }>
  }): Promise<Metadata> {
    const { id } = await params
    const coins = await getTopCoins()
    const coin = coins.find((c) => c.id === id)
    return {
      title: coin ? `${coin.name} — Dash.com` : "Crypto introuvable — Dash.com",
    }
}

export default async function Page({ params, searchParams }) {
    const { id } = await params
    const resolvedSearchParams = await searchParams
    const daysParams = Number(resolvedSearchParams.days)
    const days = [1, 7, 30, 90].includes(daysParams) ? daysParams : 7
    const [data, coins] = await Promise.all([
        getCoinChart({ id, days }), 
        getTopCoins()
    ])

    const daysOptions = [1, 7, 30, 90]

    const coin = coins.find((c) => c.id === id)

    if (!coin) return(
        <Link href="/dashboard">Lien retour dashboard</Link>
    )

    const { change, isUp } = getChange(coin.price_change_percentage_24h)

    const chartData = data?.prices.map(([timestamp, price]) => (
        { 
            price,
            timestamp: days === 1 ? new Date(timestamp).toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
            }) : new Date(timestamp).toLocaleDateString("fr-FR"), 
        }
    )) ?? []

    return(
        <div className="flex flex-col">
            <Link href="/dashboard" className="inline-flex w-fit bg-black text-white px-4 p-2 rounded-md">Retour dashboard</Link>
            <Card className="mt-12 p-4">
                <CardHeader className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-x-2">
                            <img src={coin.image} className="size-7" alt={coin.name} />
                            <span className="font-medium text-2xl">{coin.name}</span>
                            <span className="text-2xl font-medium text-zinc-400">{coin.symbol.toUpperCase()}</span>
                        </div>
                        <div className="flex items-center">
                            <Badge className={`rounded-sm h-6 mr-2 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                                {isUp && "+"}
                                {change.toFixed(2)}%
                            </Badge>
                            <FavoriteButton id={coin.id} />
                        </div>
                    </div>
                    <span className="text-2xl font-medium">{formatPrice(coin.current_price)}
                    </span>
                    <div className="mt-1">
                        {daysOptions.map((value) => (
                            <Link key={value} href={`/dashboard/coin/${id}?days=${value}`} className="mr-2">
                                <Badge className={`rounded-sm border border-zinc-200 shadow-xs ${value === days ? "bg-black text-white" : "bg-white"}`}>{value} J</Badge>
                            </Link>
                        ))}
                    </div>
                </CardHeader>
                <CardContent>
                    <CoinChart chartData={chartData} />
                </CardContent>
            </Card>
        </div>
    )
}