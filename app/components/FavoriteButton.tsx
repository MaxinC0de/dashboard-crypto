"use client"

import { Button } from "@/components/ui/button";
import { useFavoritesStore } from "@/lib/favoritesStore";
import { Star } from "lucide-react";

export default function FavoriteButton({ id }: { id: string }) {
    const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite)
    const isFavorite = useFavoritesStore((s) => s.isFavorite(id))
    return(
        <Button variant={"secondary"} onClick={() => toggleFavorite(id)}>
            <Star className={`${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
        </Button>
    )
}