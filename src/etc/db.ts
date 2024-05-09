import { PrismaClient } from "@prisma/client";

export default class Db {
    private static prisma: PrismaClient;
    static async getPrismaClient() {
        if (!this.prisma) {
            try {
                const prisma = new PrismaClient();
                await prisma.$connect();
                this.prisma = prisma;
            } catch (err) {
                console.log(err);
            }
        }
        return this.prisma;
    }
}