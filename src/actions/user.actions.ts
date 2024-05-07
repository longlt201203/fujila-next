"use server"

import Db from "@/etc/db"
import { CreateUserDto } from "@/etc/dto";

export async function getAllUsers() {
    const prisma = await Db.getPrismaClient();
    return prisma.user.findMany();
}

export async function createUser(dto: CreateUserDto) {
    const prisma = await Db.getPrismaClient();
    const user = await prisma.user.create({ data: { username: dto.username, email: dto.email } });
    return user;
}