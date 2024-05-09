import { findUserByUsernameOrEmail } from "@/actions/user.actions";
import { ErrorResponseDto } from "@/etc/dto";
import FujilaRequest from "@/etc/fujila-request";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export function randomLoginCode() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10).toString();
    }
    return otp;
}

export function signJwtToken(username: string) {
    return jwt.sign({}, process.env.JWT_SECRET || "hjhj", {
        subject: username,
        issuer: process.env.JWT_ISSUER,
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}

export function verifyJwtToken(token: string) {
    try {
        const verifyResult = jwt.verify(token, process.env.JWT_SECRET || "hjhj", {
            issuer: process.env.JWT_ISSUER,
        });
        // console.log(verifyResult)
        return typeof verifyResult == "string" ? null : verifyResult.sub || null;
    } catch (err) {
        // console.log(err);
        return null;
    }
}

export async function preprocessRequest(req: FujilaRequest) {
    const authorization = req.headers.get("Authorization");
    if (authorization) {
        if (authorization.startsWith("Bearer ")) {
            const token = authorization.slice("Bearer ".length, authorization.length);
            if (token) {
                const username = verifyJwtToken(token);
                if (username) {
                    const user = await findUserByUsernameOrEmail(username);
                    req.user = user;
                }
            }
        }
    }
    return req;
}