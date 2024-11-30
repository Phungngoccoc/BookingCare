import { TimeConstant } from '@common/constant/constant.time';
import { Schema } from 'mongoose';

export interface IScheduleBoookingId {
    medical_schedule_id: string;
}

export interface IUserBooking {
    medical_schedule_id: string;
    time_booking: TimeConstant;
    user_id: string;
    phone: string;
    email?: string;
}

export interface IRegisterBooking {
    user_id: string;
    booking_id: string;
}

export interface IResponseSchedule {
    '07:00': [string];
    '07:30': [string];
    '08:00': [string];
    '08:30': [string];
    '09:00': [string];
    '09:30': [string];
    '10:00': [string];
    '10:30': [string];
    '11:00': [string];
    '11:30': [string];
    '12:00': [string];
    '13:30': [string];
    '14:00': [string];
    '14:30': [string];
    '15:00': [string];
    '15:30': [string];
    '16:00': [string];
    '16:30': [string];
    '17:00': [string];
    '17:30': [string];
    '18:00': [string];
    '18:30': [string];
    '19:00': [string];
    '19:30': [string];
    '20:00': [string];
    '20:30': [string];
    '21:00': [string];
    '21:30': [string];
}

export interface ISchedule {
    '07:00': [Schema.Types.ObjectId];
    '07:30': [Schema.Types.ObjectId];
    '08:00': [Schema.Types.ObjectId];
    '08:30': [Schema.Types.ObjectId];
    '09:00': [Schema.Types.ObjectId];
    '09:30': [Schema.Types.ObjectId];
    '10:00': [Schema.Types.ObjectId];
    '10:30': [Schema.Types.ObjectId];
    '11:00': [Schema.Types.ObjectId];
    '11:30': [Schema.Types.ObjectId];
    '12:00': [Schema.Types.ObjectId];
    '13:30': [Schema.Types.ObjectId];
    '14:00': [Schema.Types.ObjectId];
    '14:30': [Schema.Types.ObjectId];
    '15:00': [Schema.Types.ObjectId];
    '15:30': [Schema.Types.ObjectId];
    '16:00': [Schema.Types.ObjectId];
    '16:30': [Schema.Types.ObjectId];
    '17:00': [Schema.Types.ObjectId];
    '17:30': [Schema.Types.ObjectId];
    '18:00': [Schema.Types.ObjectId];
    '18:30': [Schema.Types.ObjectId];
    '19:00': [Schema.Types.ObjectId];
    '19:30': [Schema.Types.ObjectId];
    '20:00': [Schema.Types.ObjectId];
    '20:30': [Schema.Types.ObjectId];
    '21:00': [Schema.Types.ObjectId];
    '21:30': [Schema.Types.ObjectId];
}
