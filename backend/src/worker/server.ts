import { Queue } from 'bull';
import { Router } from './router';

export class WorkerServer {
    private queues: Queue[];

    public async setup(): Promise<void> {
        await this.registerQueues();
        return;
    }

    public async kill(): Promise<unknown> {
        const promises = this.queues.map((queue) =>
            queue.close(false).catch((err) => {
                console.error(err);
            }),
        );
        return Promise.all(promises);
    }

    private async registerQueues(): Promise<void> {
        this.queues = await Router.register();
    }
}
