"use client"

import { Line, LineChart, ResponsiveContainer, YAxis } from "recharts"

export default function CoinSparkline({ prices, isUp }: { prices: number[], isUp: boolean }) {
    const data = prices.map((price) => ({ price }))
    if (data.length === 0) return 
    return(
        <div className="w-full h-20">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <YAxis hide={true} domain={["dataMin", "dataMax"]} />
                    <Line dataKey="price" dot={false} stroke={isUp ? "green" : "red"}>
                    </Line>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}