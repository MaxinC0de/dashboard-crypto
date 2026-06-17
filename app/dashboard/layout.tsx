import DashboardRefresh from "../components/DashboardRefresh";
import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }: {children: React.ReactNode}) {
    return(
        <div className="px-10 pb-4">
            <Sidebar />
            <div className="flex flex-col min-h-screen bg-white text-zinc-950">
                <main className="flex-1 mt-6">
                <DashboardRefresh>
                    {children}
                </DashboardRefresh>
                </main>
            </div>
        </div> 
    )
}