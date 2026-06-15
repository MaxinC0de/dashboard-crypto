"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts"

export default function CoinChart({ chartData }: { chartData: { price: number, timestamp: string }[] }) {
    if (chartData.length === 0) return
    return(
        <div className="w-full h-64">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <YAxis hide={true} domain={["dataMin", "dataMax"]} />
                    <Line dataKey="price" dot={false} />
                    <Tooltip 
                        formatter={(value) => 
                            Number(value).toLocaleString("fr-FR", {
                                style: "currency",
                                currency: "EUR"
                            })
                        }
                        labelFormatter={(label) => label}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}