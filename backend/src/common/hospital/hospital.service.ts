import { APIError } from '@common/error/api.error';
import { IIDHospital } from './hospital.interface';
import { HospitalModel, IHospital, IResponseBasicHospital, IResponseHospital } from './hospital';
import { statusCode } from '@config/errors';

export class HospitalService {
    public static createHospital = async (req: IHospital): Promise<IResponseHospital> => {
        console.log("check req services", req)
        try {
            const hospital = await HospitalModel.create(req);

            if (hospital) {
                return hospital.transform();
            }

            throw new APIError({
                message: 'Không thể tạo bênh viện',
                status: statusCode.REQUEST_FORBIDDEN,
                errorCode: statusCode.REQUEST_FORBIDDEN,
            });
        } catch (err) {
            throw err;
        }
    };

    public static getAllHosptital = async (): Promise<IResponseBasicHospital[]> => {
        try {
            const hospitals = await HospitalModel.find();

            if (hospitals) {
                return hospitals.map((item) => item.transformBasic());
            }

            return [];
        } catch (err) {
            throw err;
        }
    };

    public static getDetailHospital = async (data: IIDHospital): Promise<IResponseHospital> => {
        try {
            const hospital = await HospitalModel.findById(data.id);

            if (hospital) {
                return hospital.transform();
            }

            throw new APIError({
                message: 'Không tồn tại bệnh viện',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        } catch (err) {
            throw err;
        }
    };
    public static deleteHospital = async (id: string): Promise<boolean> => {
        try {
            const hospital = await HospitalModel.findByIdAndDelete(id);
            if (hospital) {
                return true; // Trả về true nếu xóa thành công
            }
            return false; // Nếu không tìm thấy bệnh viện
        } catch (err) {
            throw err;
        }
    };
}
