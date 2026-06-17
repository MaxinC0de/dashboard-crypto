"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoutButton from "../components/LogoutButton";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Sidebar() {
    return(
        <aside className="sticky top-0 z-10 py-4 flex justify-between text-zinc-950 bg-white">
            <Link href="/" className="text-2xl font-semibold">Dash.com</Link>
            <Sheet>
                <SheetTrigger><Menu /></SheetTrigger>
                <SheetContent side="left" className="flex justify-between w-64 p-4 bg-zinc-50">
                    <span className="text-2xl font-medium ml-6">Dash.com</span>
                    <LogoutButton />
                </SheetContent>
            </Sheet>
        </aside>
    )
}