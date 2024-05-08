"use client"

import { findUserByUsernameOrEmail } from "@/actions/user.actions";
import Button from "@/components/Button";
import Form from "@/components/Form";
import { Table, TableBody, TableHead, TableHeadCell, TableRow } from "@/components/Table";
import { Chat, User } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChatHistoriesPage() {
    const [isClient, setIsClient] = useState(false);

    const searchParams = useSearchParams();
    const [username, setUsername] = useState<string>();
    const [user, setUser] = useState<User & { chats: Chat[] } | null>(null);
    const [chat, setChat] = useState<Chat | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            const username = searchParams.get("username");
            setUsername(username || undefined);
            if (username) {
                console.log(username);
                findUserByUsernameOrEmail(username)
                    .then((user) => {
                        setUser(user);
                    });
            }
        }
    }, [isClient]);

    const handleFindAccount = () => {
        if (username) {
            findUserByUsernameOrEmail(username)
                .then((user) => {
                    setUser(user);
                });
        }
    }

    return (
        <div>
            <div className="flex flex-col gap-2">
                <Form.TextInput label="Username" placeholder="Enter username..." value={username} onChange={(data) => setUsername(data)} />
                <Button onClick={(e) => handleFindAccount()}>Find account</Button>
                {user ? (
                    <>
                        {user.chats.length > 0 ? (
                            <>
                                <Form.SelectInput label="Chat" options={user.chats.map((chat) => ({ label: chat.id, value: chat.id }))} />
                                <Button>Show chat histories</Button>
                            </>
                        ) : (
                            <p className="font-body text-themeColors-midnightBlue text-center">User don't have any chat yet!</p>
                        )}
                    </>
                ) : (
                    <p className="font-body text-red-400 text-center">User not found!</p>
                )}
            </div>
            {chat && (
                <div className="">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>#</TableHeadCell>
                                <TableHeadCell>User Text</TableHeadCell>
                                <TableHeadCell>Bot Response</TableHeadCell>
                                <TableHeadCell>Create At</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody></TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}