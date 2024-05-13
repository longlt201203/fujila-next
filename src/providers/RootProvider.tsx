import { GoogleOAuthProvider } from "@react-oauth/google";
import { PropsWithChildren } from "react";

export default function RootProvider(props: PropsWithChildren) {
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
            {props.children}
        </GoogleOAuthProvider>
    );
}