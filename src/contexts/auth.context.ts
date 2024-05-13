import { User } from "@prisma/client";
import { createContext } from "react";

export interface AuthContextProps {
    loginWithGoogle: (googleCredential: string) => void;
    logout: () => void;
    accessToken: string | null;
    changeAccessToken: (token: string) => void;
    profile: User | null;
    fetchProfile: (accessToken: string) => void;
    getProfile: () => Promise<User | null>;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export default AuthContext;