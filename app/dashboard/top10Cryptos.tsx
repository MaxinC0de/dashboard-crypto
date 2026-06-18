import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingDown, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Coin } from "@/lib/types"
import { formatPrice, getChange } from "@/lib/format"

export default function Top10Cryptos({ coins }: { coins: Coin[] }) {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Top 10 cryptos</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Crypto</TableHead>
                            <TableHead>Prix</TableHead>
                            <TableHead>24h</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coins.map((coin) => {
                            const { change, isUp } = getChange(coin.price_change_percentage_24h)
                            return(
                                <TableRow key={coin.id}>
                                    <TableCell>
                                        <Link href={`/dashboard/coin/${coin.id}`} className="flex items-center">
                                            <span className="inline-block">
                                                <img src={coin.image} className="w-6 h-6"></img>
                                            </span>
                                            <span className="mx-2 font-medium">{coin.name}</span>
                                        </Link>
                                    </TableCell>
                                    <TableCell className="font-medium">{formatPrice(coin.current_price)}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1.5">
                                            {isUp ? 
                                                <TrendingUp className="w-6 h-6 text-emerald-500" /> 
                                                : 
                                                <TrendingDown className="w-6 h-6 text-red-500" />
                                            }
                                            <Badge variant="outline" className={`rounded-sm h-6 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                                                {isUp && "+"}{change.toFixed(2)} %
                                            </Badge>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
    )
}