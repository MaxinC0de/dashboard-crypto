export const formatPrice = (price: number) => {
    return price.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
    })
}

export const getChange = (value: number | null) => {
    const change = value ?? 0
    const isUp = change > 0

    return { change, isUp }
}