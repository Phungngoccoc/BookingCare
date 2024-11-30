import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';
import { IDocter, DoctorModel, IResponceDocter, IResponseBasicDoctor } from './doctor';
import { IIdDoctor } from './doctor.interface';

export class DoctorService {
    public static createDoctor = async (data: IDocter): Promise<IResponceDocter> => {
        try {
            const doctor = await DoctorModel.create(data);
            if (doctor) {
                return doctor.transform();
            }

            throw new APIError({
                message: 'Tạo mới bác sĩ không thành công',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            throw err;
        }
    };

    public static getFeaturedDoctor = async (): Promise<IResponseBasicDoctor[]> => {
        try {
            const doctors = await DoctorModel.find();

            if (doctors) {
                return doctors.map((item) => item.transformBasic());
            }

            return [];
        } catch (err) {
            throw err;
        }
    };

    public static getDetialDoctor = async (data: IIdDoctor): Promise<IResponceDocter> => {
        try {
            const doctor = await DoctorModel.findById(data.id);

            if (doctor) {
                return doctor.transform();
            }

            throw new APIError({
                message: 'Không tồn tại bác sĩ',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            throw err;
        }
    };
}
