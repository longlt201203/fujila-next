import { PropsWithChildren } from "react";
import Sidebar from "@/app/dashboard/components/Sidebar";
import Header from "@/app/dashboard/components/Header";
import { cookies } from "next/headers";
import { getProfile } from "@/actions/auth.actions";
import { Role } from "@/etc/enums";
import { redirect } from "next/navigation";

export default async function DashboardTemplate(props: PropsWithChildren) {
    const accessToken = cookies().get("accessToken");
    if (accessToken) {
        const profile = await getProfile(accessToken.value);
        if (!(profile && profile.role == Role.ADMIN)) {
            redirect("/forbiden");
        }
    } else {
        redirect("/forbiden");
    }
    
    return (
        <div className="flex flex-row h-screen">
            <Sidebar />
            <div className="w-full flex flex-col">
                <Header />
                <div className="bg-themeColors-ivoryWhite p-5 h-full">
                    {props.children}
                </div>
            </div>
        </div>
    );
}