"use client"

import Button from "@/components/Button";
import Form from "@/components/Form";
import Typography from "@/components/Typography";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
    return (
        <div className="h-screen w-screen flex flex-row gap-x-10 justify-center items-center">
            <div className="w-3/4 md:w-2/4 lg:w-1/4 h-3/4 pe-10 flex flex-col justify-center gap-y-5 border-e-2">
                <Typography.H2>Admin Login</Typography.H2>
                <Typography.SmallBody className="text-red-400">Login failed, account not found!</Typography.SmallBody>
                <Form.VerticalGroup>
                    <Form.TextInput label="Username" placeholder="Enter username..." />
                    <Form.TextInput label="Password" placeholder="Enter password..." isPassword />
                </Form.VerticalGroup>
                <Button variant="royalBlue">Login</Button>
                <GoogleLogin onSuccess={(credentialResponse) => {}} />
            </div>
            <div className="p-3 w-0 md:w1/4 lg:w-2/4 h-3/4 bg-[url(/media/la-vaguelette.jpg)] bg-center bg-no-repeat bg-cover"></div>
        </div>
    );
}