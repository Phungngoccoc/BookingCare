import express, { Request, Response, NextFunction } from 'express';
import { IUserAuth, IUserDataToken } from '@common/user/user.interface';
import { Token } from '@config/token';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';

export class UserMiddleware {
    public static auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const verify = await Token.verifyToken(req.body as IUserDataToken);

            if (verify) {
                const { hash } = req.body;
                const parser: IUserAuth = JSON.parse(atob(hash));
                req.user = parser;
                next();
            }

            next(
                new APIError({
                    message: 'Invalid token user',
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                    status: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
