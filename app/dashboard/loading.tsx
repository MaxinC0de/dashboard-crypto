import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Loading() {
    return(
        <div className="flex flex-col items-center min-h-screen mt-6">
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Card key={i} className="w-full h-[173.3px] p-4 border border-zinc-200 bg-white shadow-sm ring-0">
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
            <Card className="border border-zinc-200 bg-white shadow-sm ring-0 p-4">
                <CardHeader className="font-medium">Top 10 cryptos</CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Crypto</TableHead>
                                <TableHead>Prix</TableHead>
                                <TableHead>24h</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {Array.from({ length: 10 }).map((_, i) => 
                            (
                                <TableRow key={i}>
                                    <TableCell className="flex items-center">
                                        <Skeleton className="w-6 h-6 bg-zinc-200 rounded-full" />
                                        <Skeleton className="mx-2 w-18 h-6 bg-zinc-200" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton className="mx-2 w-18 h-6 bg-zinc-200" />
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-x-1.5">
                                            <Skeleton className="size-6 bg-zinc-200" />
                                            <Skeleton className="w-15 h-6 bg-zinc-200" />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}