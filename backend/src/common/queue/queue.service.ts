import { statusCode } from '@config/errors';
import BullQueue, {Queue} from "bull";

export class QueueService{
    private static queues : Map<string, Queue> = new Map<string, Queue>;

    public static async getQueue<T = unknown>(jobName: string): Promise<Queue>{
        let queue = QueueService.queues.get(jobName);

        if(!queue){
            queue = new BullQueue<T>(jobName, {
                redis: {
                    host: "127.0.0.1",
                    port: 6379,
                }
            });

            queue.on("error", (err) => console.error(err));
            QueueService.queues.set(jobName, queue);
        }

        return queue;
    }
}