import { PORT } from '@config/environment';
import { DatabaseAdapter } from '@common/infrastructure/database.adapter';
import { ExpressServer } from './server';
import { MedicalScheduleEvent } from '@common/medical-schedule/medical-schedule.event';

export class Application {
    public static createApplication = async (): Promise<ExpressServer> => {
        await DatabaseAdapter.connect();

        Application.registerEvent();
        Application.registerCron();

        const expressServer = new ExpressServer();
        expressServer.setUp(PORT);

        return expressServer;
    };

    public static registerEvent = () => {
        MedicalScheduleEvent.register();
    };

    public static registerCron = () => {};
}
