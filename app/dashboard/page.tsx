import { getTopCoins } from "@/lib/coingecko";
import Top10Cryptos from "./top10Cryptos";
import CoinCard from "./coinCard";


export default async function Page() {    
    const coins = await getTopCoins()
    const top3Coins = coins.slice(0,3)
    return(
        <section> 
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <CoinCard coins={top3Coins} />
            </div>
            <Top10Cryptos coins={coins} />
        </section>
    )
}