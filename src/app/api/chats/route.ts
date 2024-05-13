import { createChat, findChatById } from "@/actions/chat.actions";
import { preprocessRequest } from "@/app/api/auth/utils";
import { ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
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

export async function GET(req: FujilaRequest) {
    req = await preprocessRequest(req);
    if (!req.user) return NextResponse.json(ErrorResponseDto.createUnauthorized(), { status: 401 });

    const url = new URL(req.url);
    const chatId = url.searchParams.get("id");

    if (!chatId) return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.missing_chat_id.code, message: ErrorCode.missing_chat_id.message, detail: null }), { status: 400 });

    const chat = await findChatById(chatId);
    if (!chat) return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.chat_not_found.code, message: ErrorCode.chat_not_found.message, detail: null }), { status: 400 });

    return NextResponse.json(chat, { status: 201 });
}