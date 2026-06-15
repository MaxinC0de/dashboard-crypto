import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import LogoutButton from "./LogoutButton";
import type { User } from "@supabase/supabase-js";

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
                        <Link href={"/signup"} className="text-white bg-black/85  px-3 py-2 rounded-lg">Commencer</Link>
                        <HamburgerMenu />
                    </div>
                }
            </nav>
        </section>
    )
}