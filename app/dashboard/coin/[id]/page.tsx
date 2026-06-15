import { getCoinChart } from "@/lib/coingecko"

export default async function Page({ params }) {
    const { id } = await params
    const data = await getCoinChart({ id })
    return(
        <>
            {id}
        </>
    )
}