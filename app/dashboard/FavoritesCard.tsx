"use client"

import { Card } from "@/components/ui/card";
import { useFavoritesStore } from "@/lib/favoritesStore";
import { Coin } from "@/lib/types";
import FavoriteButton from "../components/FavoriteButton";
import { Badge } from "@/components/ui/badge";
import { formatPrice, getChange } from "@/lib/format";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function FavoritesCard({ coins }: { coins: Coin[] }) {
    const favorites = useFavoritesStore((s) => s.favorites)
    const favoriteCoins = coins.filter((c) => favorites.includes(c.id))
    if (favorites.length === 0) return
    return(
        <Card className="flex flex-col">
            {favoriteCoins.map((c) => {
                const { change, isUp } = getChange(c.price_change_percentage_24h)
                return(
                    <div className="flex items-center gap-2 p-4">
                        <img className="size-6 rounded-full" src={c.image} alt={c.name} />
                        <span>{c.symbol}</span>
                        <span>{formatPrice(c.current_price)}</span>
                        {isUp ? 
                            <TrendingUp className="w-6 h-6 text-emerald-500" /> 
                            : 
                            <TrendingDown className="w-6 h-6 text-red-500" />
                        }
                        <Badge variant="outline" className={`rounded-sm h-6 ${isUp ? "text-emerald-500 bg-emerald-500/15" : "text-red-500 bg-red-500/15"}`}>
                            {isUp && "+"}{change.toFixed(2)} %
                        </Badge>
                        <span className="ml-auto">
                            <FavoriteButton id={c.id} />
                        </span>
                    </div>
                )
                })}
        </Card>
    )
}