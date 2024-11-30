import { JobHandler } from './interface';
import { Queue } from 'bull';
import { MedicalScheduleCronJob } from './medical-schedule/medical-schedule.cron';

export class Router {
    public static async register(): Promise<Queue[]> {
        const queues: JobHandler[] = [MedicalScheduleCronJob];

        return Promise.all(queues.map((queue) => queue.register()));
    }
}
