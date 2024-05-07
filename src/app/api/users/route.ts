import { createUser, getAllUsers } from "@/actions/user.actions"
import { CreateUserDto } from "@/etc/dto";
import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'
export async function GET(request: Request) {
    const data = await getAllUsers();
    return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
    const body = await req.json() as CreateUserDto;
    const user = await createUser(body);
    return NextResponse.json({ message: "Create user successfully!" });
}