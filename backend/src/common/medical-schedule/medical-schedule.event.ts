import { EventConstant } from '@common/constant/constant.event';
import { eventBus } from '@common/eventbus';
import { IRegisterBooking } from './medical-schedule.interface';
import { UserModel } from '@common/user/user';

export class MedicalScheduleEvent {
    public static register = () => {
        eventBus.on(EventConstant.BOOKING_SCHEDULE, MedicalScheduleEvent.handleBooking);
    };

    public static handleBooking = async (data: IRegisterBooking) => {
        try {
            const user = await UserModel.findByIdAndUpdate(data.user_id, {
                $push: {
                    booking: data.booking_id,
                },
            });
        } catch (err) {
            console.error(err);
        }
    };
}
