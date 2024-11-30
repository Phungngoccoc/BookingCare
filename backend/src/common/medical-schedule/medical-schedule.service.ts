import { IUser } from '@common/user/user';
import { UserModel } from '@common/user/user';
import { eventBus } from '@common/eventbus';
import { EventConstant } from '@common/constant/constant.event';
import { APIError } from '@common/error/api.error';
import { statusCode } from '@config/errors';
import { MedicalScheduleModel } from './medical-schedule';
import { IRegisterBooking, IUserBooking } from './medical-schedule.interface';
import { IUserAuth, IUserDataToken } from '@common/user/user.interface';

export class MedicalScheduleService {
    public static bookingSchedule = async (req: IUserBooking): Promise<unknown> => {
        const medicalSchedule = await MedicalScheduleModel.findByIdAndUpdate(
            req.medical_schedule_id,
            {
                $push: {
                    [`schedule.${req.time_booking}`]: {
                        user_id: req.user_id,
                    },
                },
            },
            { new: true },
        );

        if (medicalSchedule) {
            eventBus.emit(EventConstant.BOOKING_SCHEDULE, {
                user_id: req.user_id,
                booking_id: req.medical_schedule_id,
            } as IRegisterBooking);
            return true;
        }

        throw new APIError({
            message: 'Đặt lịch không thành công, hãy thử lại sau',
            errorCode: statusCode.REQUEST_NOT_FOUND,
            status: statusCode.REQUEST_NOT_FOUND,
        });
    };
}
