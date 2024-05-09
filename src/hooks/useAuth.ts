import AuthContext from "@/contexts/auth.context";
import { useContext } from "react";

export default function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("AuthProvider not found!");
    return context;
}