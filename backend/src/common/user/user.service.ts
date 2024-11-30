import { MedicalServicesModel } from '@common/medical-services/medical-service';
import { IReponseMedicalServices } from '@common/medical-services/medical-services.interface';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';
import { IUserAuth, IUserDataToken, IUserJobEmail, IUserLogin, IUserOTP } from './user.interface';
import { QueueService } from '@common/queue/queue.service';
import { JobContant } from '@common/constant/constant.job';
import { RedisAdapter } from '@common/infrastructure/redis.adapter';
import { v4 as uuid } from 'uuid';
import { Token } from '@config/token';
import { IUser, UserModel } from './user';
import { DoctorModel } from '@common/doctor/doctor';
import { IScheduleBoookingId } from '@common/medical-schedule/medical-schedule.interface';
import { MedicalScheduleModel } from '@common/medical-schedule/medical-schedule';
import { Schema } from 'mongoose';

export class UserService {
    public static getAllService = async (): Promise<IReponseMedicalServices[]> => {
        try {
            const listService = await MedicalServicesModel.find();

            if (listService) {
                return listService.map((item) => item.transform());
            }
            return [];
        } catch (err) {
            throw err;
        }
    };

    public static userSignUp = async (req: IUserLogin): Promise<boolean> => {
        const { phone, email } = req;

        if (!phone && !email) {
            throw new APIError({
                message: 'Không thể xác thực',
                errorCode: statusCode.REQUEST_NOT_FOUND,
                status: statusCode.REQUEST_FORBIDDEN,
            });
        }

        if (email) {
            const queueMail = await QueueService.getQueue(JobContant.SEND_MAIL_LOGIN);
            const queueOTP = await QueueService.getQueue(JobContant.OPT_VERIFY);

            const otp = Array.from({ length: 8 })
                .map((_, index) => Math.floor(Math.random() * (index + 8)))
                .join('');
            const ttl = 1000 * 60 * 10;

            await queueMail.add({ email, otp } as IUserJobEmail);
            await queueOTP.add(
                {
                    email,
                    phone,
                    otp,
                },
                {
                    jobId: otp,
                },
            );
            await (await RedisAdapter.getClient()).pexpire(`bull:${JobContant.OPT_VERIFY}:${otp}`, ttl);

            return true;
        }

        if (phone) {
            return false;
        }

        return false;
    };

    public static verifyOTP = async (req: IUserOTP): Promise<unknown> => {
        try {
            const { otp } = req;

            if (!otp) {
                throw new APIError({
                    message: 'OTP is required',
                    status: statusCode.REQUEST_FORBIDDEN,
                    errorCode: statusCode.REQUEST_FORBIDDEN,
                });
            }

            if (otp) {
                const queue = await QueueService.getQueue(JobContant.OPT_VERIFY);
                const job = await queue.getJob(otp);
                if (job) {
                    const user = await UserModel.create({
                        phone: job.data.phone,
                    });
                    if (user) {
                        const data = {
                            phone: job.data.phone,
                            email: job.data.email,
                            id: user.transform().id,
                        };
                        const token = await Token.genderToken(data as IUserDataToken);
                        return token;
                    }
                }
            }

            return false;
        } catch (err) {
            throw err;
        }
    };

    public static getAllBooking = async (auth: IUserAuth): Promise<[]> => {
        const user = await UserModel.findById(auth.id).populate('booking').exec();

        const result = new Map();
        const listDoctorId = user.booking.map((item) => console.log(item));
        const doctors = await DoctorModel.find({
            _id: listDoctorId,
        });

        const booking = user.booking.filter((item) => {});

        throw new APIError({
            message: 'Không thể lấy danh sách đặt lich',
            errorCode: statusCode.REQUEST_FORBIDDEN,
            status: statusCode.REQUEST_FORBIDDEN,
        });
    };

    public static getDetailBooking = async (req: IScheduleBoookingId): Promise<unknown> => {
        const booking = await MedicalScheduleModel.findById(req.medical_schedule_id);

        if (booking) {
            return booking;
        }

        throw new APIError({
            message: 'Lịch khám không tồn tại',
            errorCode: statusCode.REQUEST_NOT_FOUND,
            status: statusCode.REQUEST_NOT_FOUND,
        });
    };
}
