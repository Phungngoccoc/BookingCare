import { APIError } from '@common/error/api.error';
import { NODE_ENV } from '@config/environment';
import { NextFunction, Response, Request } from 'express';
import httpStatus from 'http-status';

export class ResponseMiddleware {
    public static handler(err: APIError, req: Request, res: Response, next: NextFunction): void {
        const { status = httpStatus.INTERNAL_SERVER_ERROR, errorCode = 1 } = err;
        const response = {
            error_code: errorCode,
            status: status,
            message: err.message ? err.message : httpStatus[status],
            stack: err.stack,
            errors: err.errors,
        };

        if (NODE_ENV !== 'development') {
            delete response.stack;
            delete response.errors;
        }
        res.status(status);
        res.json(response);
        res.end();
    }
}
