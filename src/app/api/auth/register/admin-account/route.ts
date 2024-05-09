import { createAdminUser, findUserByUsernameOrEmail } from "@/actions/user.actions";
import { ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const { email, registerCode } = await req.json();

    if (registerCode != process.env.ADMIN_REGISTER_CODE) {
        return NextResponse.json(ErrorResponseDto.createForbiden(), { status: 403 });
    }
    
    const existedUser = await findUserByUsernameOrEmail(email);
    if (existedUser) {
        return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.user_email_existed.code, message: ErrorCode.user_email_existed.message, detail: { email } }), { status: 400 });
    }

    await createAdminUser(email);

    return NextResponse.json({ message: "Create admin successfully!" }, { status: 201 });
}