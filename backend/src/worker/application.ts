import { WorkerServer } from './server';
import { DatabaseAdapter } from '@common/infrastructure/database.adapter';
import { RedisAdapter } from '@common/infrastructure/redis.adapter';

export class Application {
    public static async createApplication(): Promise<WorkerServer> {
        await DatabaseAdapter.connect();
        // await RedisAdapter.connect();

        Application.registerEvents();

        const server = new WorkerServer();
        await server.setup();

        return server;
    }

    public static registerEvents() { }
}
