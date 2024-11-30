import { APIError } from '@common/error/api.error';
import { MedicalServices } from '@common/medical-services/medical-service.service';
import { IMedicalDetailId, IMedicalMajorId } from '@common/medical-services/medical-services.interface';
import { statusCode } from '@config/errors';
import { NextFunction, Response, Request } from 'express';

export class MedicalServiceController {
    public static getAllMedicalService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await MedicalServices.getAllMedicalService();
            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không có dịch vụ nào',
                    status: statusCode.REQUEST_FORBIDDEN,
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static getAllSpecialty = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await MedicalServices.getAllSpecialty();

            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            throw new APIError({
                message: 'Không có chuyên ngành nào',
                errorCode: statusCode.REQUEST_NOT_FOUND,
                status: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            next(err);
        }
    };

    public static getDetailMedicalService = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const data = await MedicalServices.getDetailMedicalService(req.query as unknown as IMedicalDetailId);
            if (data) {
                res.sendJson({
                    data: data,
                });
                return;
            }

            next(
                new APIError({
                    message: 'Không có danh mục nào',
                    status: statusCode.REQUEST_NOT_FOUND,
                    errorCode: statusCode.REQUEST_NOT_FOUND,
                }),
            );
        } catch (err) {
            next(err);
        }
    };

    public static getMedicalMajor = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const doctors = await MedicalServices.getMedicalMajor(req.query as unknown as IMedicalMajorId);

            if (doctors?.length > 0) {
                res.sendJson({
                    data: doctors,
                });
                return;
            }

            throw new APIError({
                message: 'Không tồn tại chuyên ngành này',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            next(err);
        }
    };
}
