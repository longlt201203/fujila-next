"use server"

import Db from "@/etc/db"

export async function findChatById(chatId: string) {
    const prisma = await Db.getPrismaClient();
    return prisma.chat.findFirst({ where: { id: chatId }, include: { rounds: true } });
}

export async function createChat(userId: string) {
    const prisma = await Db.getPrismaClient();
    return await prisma.chat.create({ data: { userId: userId } });
}