"use client"

import { logout } from "@/actions/auth.actions";
import Button, { LinkButton } from "@/components/Button";
import Typography from "@/components/Typography";
import { usePathname } from "next/navigation";

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

export default function Sidebar() {
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
                <Button variant="danger" onClick={() => { logout() }}>Logout</Button>
            </div>
        </div>
    );
}