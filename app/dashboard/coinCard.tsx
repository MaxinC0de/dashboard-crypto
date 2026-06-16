import { Card, CardContent, CardHeader } from "@/components/ui/card";
import CoinSparkline from "./CoinSparkline";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function CoinCard({ coins }: { coins: {} }) {
    return(
        <section>
            {coins.map((coin) => {
                   const change = coin.price_change_percentage_24h ?? 0
                   const isUp = change > 0
                    return(
                        <Link href={`/dashboard/coin/${coin.id}`} className="cursor-pointer">
                            <Card key={coin.id} className="border border-zinc-200 bg-white shadow-sm ring-0">
                                <CardHeader className="flex items-center justify-between">
                                    <span className="flex items-center">
                                        <img src={coin.image} className="w-6 h-6 mr-2" />
                                        <span className="font-medium">{coin.name}</span>
                                        <span className="text-sm text-zinc-500 ml-2">{coin.symbol.toUpperCase()}</span>
                                    </span>
                                    <Badge className={`rounded-sm h-6 ${
                                        isUp ? "text-emerald-500 bg-emerald-500/15"
                                        : "text-red-500 bg-red-500/15"
                                    }`}>
                                        {isUp && "+"}
                                        {change.toFixed(2)}%
                                    </Badge>
                                </CardHeader>
                                <CardContent className="-mt-3">
                                    <span className="text-2xl font-medium">{coin.current_price.toLocaleString("fr-FR", {
                                            style: "currency",
                                            currency: "EUR",
                                        })}
                                    </span>
                                    <CoinSparkline prices={coin.sparkline_in_7d?.price ?? []} isUp={isUp} />
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
        </section>
    )
}