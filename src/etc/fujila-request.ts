import { User } from "@prisma/client";
import { NextRequest } from "next/server";

type FujilaRequest = NextRequest & { user?: User | null };

export default FujilaRequest;