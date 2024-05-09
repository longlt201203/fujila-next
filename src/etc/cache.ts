import { RedisClientType, createClient } from "redis";

export default class Cache {
    private static redis: ReturnType<typeof createClient>;
    static async getRedisClient() {
        if (!this.redis) {
            try {
                const redis = createClient({ url: process.env.REDIS_URL });
                await redis.connect();
                this.redis = redis;
            } catch (err) {
                console.log(err);
            }
        }
        return this.redis;
    }
}