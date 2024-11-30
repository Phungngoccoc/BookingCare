import { APIError } from '@common/error/api.error';
import { IUserBooking } from '@common/medical-schedule/medical-schedule.interface';
import { MedicalScheduleService } from '@common/medical-schedule/medical-schedule.service';
import { UserModel } from '@common/user/user';
import { statusCode } from '@config/errors';
import express, { Request, Response, NextFunction } from 'express';

export class MedicalScheduleController {
    public static bookingSchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const booking = await MedicalScheduleService.bookingSchedule(req.body as IUserBooking);

            if (booking) {
                res.sendJson({
                    data: 'Đặt lịch thành công',
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không thể đặt lịch',
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                    status: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
