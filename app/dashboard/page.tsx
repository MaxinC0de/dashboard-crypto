import { getTopCoins } from "@/lib/coingecko";
import Top10Cryptos from "./top10Cryptos";
import CoinCard from "./CoinCard";
import FavoritesCard from "./FavoritesCard";


export default async function Page() {    
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const coins = await getTopCoins()
    const top3Coins = coins.slice(0,3)
    return(
        <section> 
            <FavoritesCard coins={coins} />
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3">
                <CoinCard coins={top3Coins} />
            </div>
            <Top10Cryptos coins={coins} />
        </section>
    )
}