import { createUser, findUserByUsernameOrEmail, getAllUsers } from "@/actions/user.actions"
import Cache from "@/etc/cache";
import { CreateUserDto } from "@/etc/dto";
import { ErrorResponseDto } from "@/etc/dto/error-response.dto";
import transporter from "@/etc/mail.service";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const data = await getAllUsers();
    return NextResponse.json(data, { status: 200 });
}

export async function POST(req: NextRequest) {
    const redis = await Cache.getRedisClient();
    const body = await req.json() as CreateUserDto;

    // if (!body.code) {
    //     NextResponse.json(ErrorResponseDto.create({ code: "user_existed", message: "Missing login ", detail: { user: user } }), { status: 400 });
    // }

    let user = await findUserByUsernameOrEmail(body.username) as User;
    if (!user) {
        

        user = await createUser(body);
        return NextResponse.json({ message: "Create user successfully!" }, { status: 201 });
    } else {
        return NextResponse.json(ErrorResponseDto.create({ code: "user_existed", message: "User already existed!", detail: { user: user } }), { status: 400 });
    }
}