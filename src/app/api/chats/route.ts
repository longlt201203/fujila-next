import { createChat } from "@/actions/chat.actions";
import { preprocessRequest } from "@/app/api/auth/utils";
import { ErrorResponseDto } from "@/etc/dto";
import FujilaRequest from "@/etc/fujila-request";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req: FujilaRequest) {
    req = await preprocessRequest(req);
    if (!req.user) return NextResponse.json(ErrorResponseDto.createUnauthorized(), { status: 401 });

    console.log(`User ${req.user.username} create a chat!`);
    const chat = await createChat(req.user.id);

    return NextResponse.json({ message: "Create chat successfully!", chatId: chat.id }, { status: 201 });
}