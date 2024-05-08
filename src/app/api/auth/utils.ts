import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

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
    const verifyResult = jwt.verify(token, process.env.JWT_SECRET || "hjhj", {
        issuer: process.env.JWT_ISSUER,
    });
    return typeof verifyResult == "string" ? null : verifyResult.sub || null;
}

export async function verifyRequest(req: NextRequest) {
    
}