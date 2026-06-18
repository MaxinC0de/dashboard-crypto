import Link from "next/link";
import LogoutButton from "./LogoutButton";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

export default function Navbar({ user }: { user: User | null }) {
    return(
        <section className="px-3 py-4 border-b border-zinc-200">
            <nav className="flex justify-between items-center">
                <Link href="/" className="cursor-pointer font-semibold">Dash.com</Link>
                {user ?  
                    <>
                        <div>
                            <Link href="/dashboard" className="mr-2">Dashboard</Link>
                            <LogoutButton />
                        </div>
                    </>
                :
                    <div className="flex items-center gap-x-3 font-semibold text-sm">
                        <Link href={"/login"} className="hover:text-black/50 cursor-pointer">Se connecter</Link>
                        <Button asChild size="sm" className="max-w-6xl mx-auto px-4">
                            <Link href="/login">Commencer</Link>
                        </Button>
                    </div>
                }
            </nav>
        </section>
    )
}