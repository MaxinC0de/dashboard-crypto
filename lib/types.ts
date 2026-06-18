export interface Coin {
    id: string
    name: string
    symbol: string
    image: string
    current_price: number
    price_change_24h: number
    price_change_percentage_24h: number | null
    sparkline_in_7d: { price: number[] }
}