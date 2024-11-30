import express, { Request, Response, NextFunction } from 'express';
import { DoctorService } from '@common/doctor/doctor.service';
import { IIdDoctor } from '@common/doctor/doctor.interface';
import { IDocter } from '@common/doctor/doctor';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';

export class DoctorController {
    public static createDoctor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const doctor = await DoctorService.createDoctor(req.body as IDocter);

            if (doctor) {
                res.sendJson({
                    data: doctor,
                });
                return;
            }

            throw new APIError({
                message: 'Tạo mới bác sĩ không thành công',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            next(err);
        }
    };

    public static getFeaturedDoctor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const doctors = await DoctorService.getFeaturedDoctor();
            res.sendJson({
                data: doctors,
            });
            return;
        } catch (err) {
            next(err);
        }
    };

    public static getDetialDoctor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {



        try {
            const doctor = await DoctorService.getDetialDoctor({ id: req.query.id } as IIdDoctor);

            if (doctor) {
                res.sendJson({
                    data: doctor,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không tồn tại bác sĩ',
                    status: statusCode.REQUEST_NOT_FOUND,
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };
}
