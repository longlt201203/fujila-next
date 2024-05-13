"use server"

import { findUserByUsernameOrEmail } from "@/actions/user.actions";
import { signJwtToken, verifyJwtToken } from "@/app/api/auth/utils";
import Cache from "@/etc/cache";
import { Role } from "@/etc/enums";
import { OAuth2Client } from "google-auth-library";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function authenticated(token: string, roles?: Role[]) {
    const username = verifyJwtToken(token);
    if (username) {
        const user = await findUserByUsernameOrEmail(username);
        if (user) {
            
            if (roles) {
                return roles.includes(user.role);
            }

            return true;
        }
    }

    return false;
}

export async function loginWithGoogle(credential: string) {
    const googleClient = new OAuth2Client();
    const ticket = await googleClient.verifyIdToken({ idToken: credential, audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID });
    const payload = ticket.getPayload();
    if (!payload || !payload.email) return false;
    const email = payload.email;
    const user = await findUserByUsernameOrEmail(email);
    if (!user) return false;
    const accessToken = signJwtToken(user.username);
    cookies().set("accessToken", accessToken);
    return true;
}

export async function logout() {
    cookies().delete("accessToken");
    redirect("/login");
}

export async function getProfile(accessToken: string) {
    const redis = await Cache.getRedisClient();
    
    const username = verifyJwtToken(accessToken);
    if (!username) return null;

    let profile = null;

    let strProfile = await redis.get(`${username}:profile`);
    if (!strProfile) {
        profile = await findUserByUsernameOrEmail(username);
        redis.set(`${username}:profile`, JSON.stringify(profile));
    } else {
        profile = JSON.parse(strProfile);
    }

    return profile;
}