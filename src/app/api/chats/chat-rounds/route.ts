import { createChatRound, findChatById } from "@/actions/chat.actions";
import { preprocessRequest } from "@/app/api/auth/utils";
import { ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
import FujilaRequest from "@/etc/fujila-request";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req: FujilaRequest) {
    req = await preprocessRequest(req);
    if (!req.user) return NextResponse.json(ErrorResponseDto.createUnauthorized(), { status: 401 });
    const { chatId, userText, botResponse } = await req.json();

    const chat = await findChatById(chatId);
    if (!chat) return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.chat_not_found.code, message: ErrorCode.chat_not_found.message, detail: null }), { status: 400 });

    const chatRound = await createChatRound(chatId, userText, botResponse);

    return NextResponse.json({ message: "Update chat successfully!" }, { status: 201 });
}