import ioredis, { Redis } from 'ioredis';
import { REDIS_URL } from '@config/environment';
import { isTemplateLiteralTypeNode } from 'typescript';

export class RedisAdapter {
    private static client: Redis;

    private static subscriber: Redis;
    private static allClients: Redis[] = [];

    public static async getClient(): Promise<Redis> {
        if (!RedisAdapter.client) {
            return await RedisAdapter.connect();
        }
        return RedisAdapter.client;
    }

    public static async connect(): Promise<Redis> {
        const tmp = new ioredis(REDIS_URL, {
            lazyConnect: true,
            maxRetriesPerRequest: 10,
        });

        tmp.on('ready', () => {
            ('Connect to redis successfully!');
        });
        tmp.on('end', () => {
            console.log('Connect to redis ended!');
        });

        tmp.on('error', (error) => {
            console.log('Connect to redis error!', error);
        });

        try {
            await tmp.connect();
            RedisAdapter.allClients.push(tmp);
            return tmp;
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }

    public static async disconnect(): Promise<void> {
        try {
            await Promise.all(RedisAdapter.allClients.map((client) => client.quit()));
        } catch (err) {
            console.error(err);
        }
    }

    static serialize(value: unknown): string {
        if (value) {
            return JSON.stringify(value);
        }
        return value as string;
    }

    static deserialize(value: unknown): unknown {
        if (value && typeof value === 'string') {
            return JSON.parse(value);
        }
        return value;
    }

    static async get(key: string, shouldDeserialize = false): Promise<unknown> {
        const value = await (await RedisAdapter.getClient()).get(key);
        return shouldDeserialize ? RedisAdapter.deserialize(value) : value;
    }

    static async set(key: string, value: unknown, ttl = 0, shouldSerialize = false): Promise<unknown> {
        const stringValue: string = shouldSerialize ? RedisAdapter.serialize(value) : (value as string);
        if (ttl > 0) {
            return (await RedisAdapter.getClient()).set(key, stringValue, 'EX', ttl);
        }
        return (await RedisAdapter.getClient()).set(key, stringValue);
    }

    static async delete(key: string): Promise<unknown> {
        return (await RedisAdapter.getClient()).del(key);
    }
}
