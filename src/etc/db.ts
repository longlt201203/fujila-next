import { PrismaClient } from "@prisma/client";

export default class Db {
    private static prisma: PrismaClient;
    static async getPrismaClient() {
        if (!this.prisma) {
            this.prisma = new PrismaClient();
            await this.prisma.$connect();
        }
        return this.prisma;
    }
}