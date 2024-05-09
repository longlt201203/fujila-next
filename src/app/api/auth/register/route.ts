import { createChat } from "@/actions/chat.actions";
import { createUser, findUserByUsernameOrEmail } from "@/actions/user.actions";
import { randomLoginCode } from "@/app/api/auth/utils";
import Cache from "@/etc/cache";
import { CreateUserDto, ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
import MailService from "@/etc/mail.service";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const mailService = MailService.getInstance();
    const redis = await Cache.getRedisClient();

    const body = await req.json() as CreateUserDto;

    const result = await Promise.all([findUserByUsernameOrEmail(body.username), findUserByUsernameOrEmail(body.email)]);

    const errors = [];
    if (result[0]) {
        errors.push(ErrorCode.user_username_existed.code);
    }
    if (result[1]) {
        errors.push(ErrorCode.user_email_existed.code);
    }
    if (errors.length > 0) return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.validation_err.code, message: ErrorCode.validation_err.message, detail: { errors: errors } }), { status: 400 });

    try {
        const user = await createUser(body);
        createChat(user.id);
    } catch (err) {
        console.log(err);
        return NextResponse.json(ErrorResponseDto.createInternalServerError(), { status: 500 })
    }

    const loginCode = randomLoginCode();
    redis.set(`${body.username}:loginCode`, loginCode, { EX: 30 });
    mailService.sendLoginCodeMail(body.email, loginCode);

    return NextResponse.json({ message: "Register successfully! Please check your email for you login code." }, { status: 201 });
}