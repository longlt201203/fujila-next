import { signJwtToken } from "@/app/api/auth/utils";
import Cache from "@/etc/cache";
import { ErrorResponseDto } from "@/etc/dto";
import ErrorCode from "@/etc/error-code";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    const redis = await Cache.getRedisClient();
    const { username, code } = await req.json();

    const loginCode = await redis.get(`${username}:loginCode`);
    if (!loginCode || loginCode != code) {
        return NextResponse.json(ErrorResponseDto.create({ code: ErrorCode.invalid_login_code.code, message: ErrorCode.invalid_login_code.message, detail: { code: code } }), { status: 400 });
    }

    redis.del(`${username}:loginCode`);
    return NextResponse.json({ accessToken: signJwtToken(username) }, { status: 201 });
}