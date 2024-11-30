import { APIError } from '@common/error/api.error';
import { MedicalScheduleModel } from '@common/medical-schedule/medical-schedule';
import { IScheduleBoookingId } from '@common/medical-schedule/medical-schedule.interface';
import { IUser } from '@common/user/user';
import { IUserAuth, IUserDataToken, IUserLogin, IUserOTP } from '@common/user/user.interface';
import { UserService } from '@common/user/user.service';
import { statusCode } from '@config/errors';
import { Token } from '@config/token';
import { Request, Response, NextFunction } from 'express';

export class UserController {
    public static getAllService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await UserService.getAllService();

            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Service invalid',
                    status: statusCode.AUTH_ACCOUNT_BLOCKED,
                    errorCode: statusCode.AUTH_ACCOUNT_BLOCKED,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static userSignUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const check = await UserService.userSignUp(req.body as IUserLogin);
            if (check) {
                res.sendJson({
                    data: {
                        message: 'Mã OTP đã được tạo vui lòng chờ 1 - 2 phút',
                    },
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không thể tạo mã OTP',
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                    status: statusCode.REQUEST_FORBIDDEN,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static verifyOTP = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const verify = await UserService.verifyOTP(req.body as IUserOTP);

            if (verify && verify !== null) {
                res.sendJson({
                    data: verify,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Mã OTP của bạn sai',
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                    status: statusCode.REQUEST_FORBIDDEN,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static getAllBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const bookings = await UserService.getAllBooking(req.user as IUserAuth);

            if (bookings) {
                res.sendJson({
                    data: bookings,
                });
                return;
            }

            throw new APIError({
                message: 'Bạn chưa đặt lịch khám nào',
                errorCode: statusCode.REQUEST_NOT_FOUND,
                status: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            next(err);
        }
    };

    public static getDetailBooking = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const booking = await UserService.getDetailBooking(req.body as IScheduleBoookingId);

            if (booking) {
                res.sendJson({
                    data: booking,
                });
                return;
            }

            throw new APIError({
                message: 'Lịch khám không tồn tại',
                errorCode: statusCode.REQUEST_NOT_FOUND,
                status: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            next(err);
        }
    };
}
