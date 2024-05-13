import { findUserByUsernameOrEmail } from "@/actions/user.actions";
import { randomLoginCode } from "@/app/api/auth/utils";
import Cache from "@/etc/cache";
import { ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
import MailService from "@/etc/mail.service";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const mailService = MailService.getInstance();
    const redis = await Cache.getRedisClient();
    const { username } = await req.json();

    const prevLoginCode = await redis.get(`${username}:loginCode`);
    if (prevLoginCode) {
        return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.login_code_existed.code, message: ErrorCode.login_code_existed.message, detail: { username: username } }), { status: 400 });
    }

    const user = await findUserByUsernameOrEmail(username);
    if (!user) {
        return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.user_not_found.code, message: ErrorCode.user_not_found.message, detail: { username: username } }), { status: 400 });
    }

    const loginCode = randomLoginCode();
    redis.set(`${username}:loginCode`, loginCode, { EX: 30 });
    mailService.sendLoginCodeMail(user.email, loginCode);

    return NextResponse.json({ message: "Request login code successfully!" }, { status: 201 });
}