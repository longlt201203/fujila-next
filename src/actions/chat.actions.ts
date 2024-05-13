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

export async function createChatRound(chatId: string, userText: string, botResponse: string) {
    const prisma = await Db.getPrismaClient();
    return await prisma.chatRound.create({
        data: {
            chatId: chatId,
            userText: userText,
            botResponse: botResponse
        }
    });
}