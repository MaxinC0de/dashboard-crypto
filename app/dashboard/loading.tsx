import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="h-[173.3px] p-4 border border-zinc-200 bg-white shadow-sm ring-0">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center">
                                <Skeleton className="w-6 h-6 bg-zinc-200 rounded-full" />
                                <Skeleton className="w-11 h-5 mx-2 bg-zinc-200" />
                                <Skeleton className="w-5.5 h-5 bg-zinc-200" />
                            </span>
                            <Skeleton className="w-12.5 h-6 bg-zinc-200 rounded-md"></Skeleton>
                        </div>
                        <Skeleton className="w-30.5 h-8 bg-zinc-200 rounded-md"></Skeleton>
                        <Skeleton className="w-72 h-20 bg-zinc-200 rounded-md"></Skeleton>
                    </Card>
                ))}
            </div>
        </div>
    )
}