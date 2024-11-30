import { APIError } from '@common/error/api.error';
import { MedicalDetailModel, MedicalServicesModel } from './medical-service';
import {
    IMedicalDetailId,
    IMedicalMajorId,
    IReponseMedicalDetial,
    IReponseMedicalServices,
} from './medical-services.interface';
import { statusCode } from '@config/errors';
import { IIdDoctor } from '@common/doctor/doctor.interface';
import { IResponceDocter, DoctorModel } from '@common/doctor/doctor';

export class MedicalServices {
    public static getAllMedicalService = async (): Promise<IReponseMedicalServices[]> => {
        try {
            const listMedicalService = await MedicalServicesModel.find({});
            if (listMedicalService) {
                return listMedicalService.map((item) => item.transform());
            }
            return [];
        } catch (err) {
            throw new APIError({
                message: 'Không có dịch vụ nào',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        }
    };

    public static getAllSpecialty = async (): Promise<IReponseMedicalDetial[]> => {
        const medicalSpecialty = await MedicalDetailModel.find();

        if (medicalSpecialty?.length > 0) {
            return medicalSpecialty.map((item) => item.transform());
        }

        return [];
    };

    public static getDetailMedicalService = async (req: IMedicalDetailId): Promise<IReponseMedicalDetial[]> => {
        try {
            const { id } = req;
            if (id) {
                const medicalDetial = await MedicalDetailModel.find({ medical_service_id: id });
                if (medicalDetial) {
                    return medicalDetial.map((item) => item.transform());
                }
            }

            return [];
        } catch (err) {
            throw new APIError({
                message: 'Không có danh mục nào',
                status: statusCode.REQUEST_NOT_FOUND,
                errorCode: statusCode.REQUEST_NOT_FOUND,
            });
        }
    };

    public static getMedicalMajor = async (req: IMedicalMajorId): Promise<IResponceDocter[]> => {
        const { id } = req;
        if (id) {
            const major = await MedicalDetailModel.findById(id);

            if (major) {
                const doctor = await DoctorModel.find({
                    specialty: major.name,
                });

                if (doctor?.length > 0) {
                    return doctor.map((doc) => doc.transform());
                }

                return [];
            }
        }

        throw new APIError({
            message: 'Không tồn tại chuyên khoa này',
            status: statusCode.REQUEST_NOT_FOUND,
            errorCode: statusCode.REQUEST_NOT_FOUND,
        });
    };
}
