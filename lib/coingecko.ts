export async function getTopCoins() {
    const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true",
        { next: { revalidate: 60 } }
    )
    if (!res.ok) throw new Error("CoinGecko API error")
    const coins = await res.json()
    return coins
}

export async function getCoinChart({ id, days }: { id: string, days: number }) {
    const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${days}`, {
            next: {
                revalidate: 60
            }
        }
    )
    if (!res.ok) throw new Error("Erreur requête coin gecko")
    const data = await res.json()
    return data
}