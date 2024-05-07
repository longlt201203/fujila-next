"use client"

import { PropsWithChildren } from "react";
import Typography from "@/components/Typography";
import { LinkButton } from "@/components/Button";
import { usePathname } from "next/navigation";

function Header() {
    return (
        <div className="p-2 bg-themeColors-crystalBlue">
            <Typography.Display4xl className="text-4xl text-white text-center">Fujila</Typography.Display4xl>
        </div>
    );
}

const pathMapping = [
    {
        path: "/dashboard",
        text: "Dashboard"
    },
    {
        path: "/dashboard/users",
        text: "Users"
    },
    {
        path: "/dashboard/chat-histories",
        text: "Chat Histories"
    }
];

function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-1/6 h-full bg-themeColors-royalBlue flex flex-col gap-y-5 py-5">
            <div className="">
                <Typography.SubDisplay className="text-white text-center">Users</Typography.SubDisplay>
            </div>
            <div className="flex flex-col px-3 gap-y-1 h-full">
                {pathMapping.map((item, index) => (
                    <LinkButton key={index} href={item.path} variant={item.path == pathname ? "crystalBlue" : "royalBlue"}>{item.text}</LinkButton>
                ))}
            </div>
            <div className="flex flex-col px-3 gap-y-1">
                <LinkButton variant="danger">Logout</LinkButton>
            </div>
        </div>
    );
}

export default function DashboardTemplate(props: PropsWithChildren) {
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