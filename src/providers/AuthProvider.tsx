"use client"

import { getProfile as serverGetProfile, loginWithGoogle as serverLoginWithGoogle } from "@/actions/auth.actions";
import AuthContext from "@/contexts/auth.context";
import { User } from "@prisma/client";
import { PropsWithChildren, useEffect, useState } from "react";

export default function AuthProvider(props: PropsWithChildren) {
    const [isClient, setIsClient] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [profile, setProfile] = useState<User | null>(null);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            setAccessToken(window.localStorage.getItem("accessToken"));

            // setInterval(() => { fetchProfile() }, 30 * 1000);
        }
    }, [isClient]);

    const changeAccessToken = (token: string) => {
        localStorage.setItem("accessToken", token);
        setAccessToken(token);
    }

    const fetchProfile = () => {
        if (accessToken) {
            serverGetProfile(accessToken)
                .then((profile) => {
                    setProfile(profile);
                });
        } else {
            setProfile(null);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, [accessToken]);

    useEffect(() => {
        console.log(profile);
    }, [profile]);

    const loginWithGoogle = (googleCredential: string) => {
        serverLoginWithGoogle(googleCredential)
            .then((accessToken) => {
                setAccessToken(accessToken);
            });
    }

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
    }

    const getProfile = async () => {
        let profile = null;

        if (accessToken) {
            profile = await serverGetProfile(accessToken);
        }
        setProfile(profile);
        return profile;
    }

    return (
        <AuthContext.Provider value={{ loginWithGoogle, logout, accessToken, profile, fetchProfile, changeAccessToken, getProfile }}>
            {props.children}
        </AuthContext.Provider>
    );
}