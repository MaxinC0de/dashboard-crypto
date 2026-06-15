import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingDown, TrendingUp } from "lucide-react"

export default function Top10Cryptos({ coins }) {
    return(
        <Card className="border border-zinc-200 bg-white shadow-sm ring-0">
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
                            const isUp = coin.price_change_percentage_24h ?? 0 > 0
                            return(
                                <TableRow key={coin.id}>
                                    <TableCell className="flex items-center"><span className="inline-block"><img src={coin.image} className="w-6 h-6"></img></span><span className="mx-2 font-medium">{coin.name}</span></TableCell>
                                    <TableCell className="font-medium">{coin.current_price.toLocaleString("fr-FR", {
                                            style: "currency",
                                            currency: "EUR",
                                        })}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1.5">
                                            {isUp ? 
                                                <TrendingUp className="w-6 h-6 text-emerald-500" /> 
                                                : 
                                                <TrendingDown className="w-6 h-6 text-red-500" />
                                            }
                                            <Badge variant="outline" className={`rounded-sm h-6 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                                                {isUp && "+"}{coin.price_change_percentage_24h.toFixed(2)} %
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