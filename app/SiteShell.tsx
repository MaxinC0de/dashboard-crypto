import { createClient } from "@/lib/server";
import Navbar from "./components/Navbar";

export default async function SiteShell({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return(
        <>
            <Navbar user={user} />
            {children}
        </>
    )
}