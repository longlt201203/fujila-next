import { RedisClientType, createClient } from "redis";

export default class Cache {
    private static redis: RedisClientType;
    static async getRedisClient() {
        if (!this.redis) {
            this.redis = createClient({ url: process.env.REDIS_URL });
            await this.redis.connect();
        }
        return this.redis;
    }
}