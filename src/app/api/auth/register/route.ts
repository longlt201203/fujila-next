import { createUser, findUserByUsernameOrEmail } from "@/actions/user.actions";
import { randomLoginCode } from "@/app/api/auth/utils";
import Cache from "@/etc/cache";
import { CreateUserDto, ErrorResponseDto } from "@/etc/dto";
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
        errors.push("user_username_existed");
    }
    if (result[1]) {
        errors.push("user_email_existed");
    }
    if (errors.length > 0) return NextResponse.json(ErrorResponseDto.create({ code: "validation_err", message: "Register Error!", detail: { errors: errors } }), { status: 400 });

    try {
        await createUser(body);
    } catch (err) {
        console.log(err);
        return NextResponse.json(ErrorResponseDto.create({ code: "server_err", message: "Error while creating user!", detail: {} }), { status: 500 })
    }

    const loginCode = randomLoginCode();
    redis.set(`${body.username}:loginCode`, loginCode, { EX: 30 });
    mailService.sendLoginCodeMail(body.email, loginCode);

    return NextResponse.json({ message: "Register successfully! Please check your email for you login code." }, { status: 201 });
}