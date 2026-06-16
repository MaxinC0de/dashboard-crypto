"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function DashboardRefresh({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [progress, setProgress]  = useState(0)

    const start = useRef(Date.now())

    useEffect(() => {
        let id: number
        const tick = () => {
            const elapsed = Date.now() - start.current
            const next = (elapsed / 60_000) * 100

            if (next >= 100) {
                router.refresh()
                start.current = Date.now()
                setProgress(0)
            } else {
                setProgress(next)
            }

            id = requestAnimationFrame(tick)
        }

        id = requestAnimationFrame(tick)        

        return () => cancelAnimationFrame(id)

    }, [router])

    

    return(
        <>
            {children}
            <div className="fixed bottom-0 left-0 right-0 z-50 h-1 bg-zinc-200">
                <div style={{ width: `${progress}%` }} className="h-full origin-left bg-emerald-500/70" />
           </div>
        </>
    )
}