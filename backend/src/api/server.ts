import express, { Express } from 'express';
import { Server } from 'http';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';
import { ResponseMiddleware } from './response.middleware';

express.response.sendJson = function (data: object) {
    return this.json({ error_code: 0, message: 'OK', ...data });
};

export class ExpressServer {
    private server?: Express;
    private httpServer: Server;

    public setUp = async function (port: number): Promise<Express> {
        const server = express();

        this.configMiddware(server);
        this.useRouter(server);
        this.setUpErrorHandlers(server);

        this.httpServer = this.listen(server, port);
        this.server = server;

        return this.server;
    };

    public useRouter = (server: Express) => {
        server.use(router);
    };

    public configMiddware = (server: Express) => {
        server.use(
            cors({
                origin: '*',
                // credentials: true,
            }),
        );
        server.use(helmet());
        server.use(cookieParser());
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
    };

    public listen = (server: Express, port: number) => {
        return server.listen(port);
    };

    public setUpErrorHandlers(server: Express): void {
        server.use(ResponseMiddleware.handler);
    }
}
