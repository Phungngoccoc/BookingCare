import mongoose, { Schema, model } from 'mongoose';
import { ISchedule, IResponseSchedule } from './medical-schedule.interface';

export interface IResponseMedicalSchedule {
    id: string;
    doctor_id: string;
    schedule: IResponseSchedule;
}

export interface IMedicalSchedule extends Document {
    _id: Schema.Types.ObjectId;
    doctor_id: Schema.Types.ObjectId;
    schedule: ISchedule;

    transform(): IResponseMedicalSchedule;
}

const MedicalScheduleSchema: Schema<IMedicalSchedule> = new Schema(
    {
        doctor_id: { type: Schema.Types.ObjectId, ref: 'Doctor' },
        schedule: {
            '07:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '07:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '08:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '08:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '09:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '09:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '10:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '10:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '11:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '11:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '12:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '13:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '14:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '14:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '15:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '15:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '16:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '16:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '17:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '17:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '18:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '18:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '19:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '19:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '20:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '20:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '21:00': [{ type: Schema.Types.ObjectId, ref: 'User' }],
            '21:30': [{ type: Schema.Types.ObjectId, ref: 'User' }],
        },
    },
    {
        timestamps: true,
    },
);

MedicalScheduleSchema.method({
    transform(): IResponseMedicalSchedule {
        return {
            id: this._id.toHexString(),
            doctor_id: this.doctor_id.toHexString(),
            schedule: {
                '07:00': this['07:00'].map((item) => item.toHexString()),
                '07:30': this['07:30'].map((item) => item.toHexString()),
                '08:00': this['08:00'].map((item) => item.toHexString()),
                '08:30': this['08:30'].map((item) => item.toHexString()),
                '09:00': this['09:00'].map((item) => item.toHexString()),
                '09:30': this['09:30'].map((item) => item.toHexString()),
                '10:00': this['10:00'].map((item) => item.toHexString()),
                '10:30': this['10:30'].map((item) => item.toHexString()),
                '11:00': this['11:00'].map((item) => item.toHexString()),
                '11:30': this['11:30'].map((item) => item.toHexString()),
                '12:00': this['12:00'].map((item) => item.toHexString()),
                '13:30': this['13:30'].map((item) => item.toHexString()),
                '14:00': this['14:00'].map((item) => item.toHexString()),
                '14:30': this['14:30'].map((item) => item.toHexString()),
                '15:00': this['15:00'].map((item) => item.toHexString()),
                '15:30': this['15:30'].map((item) => item.toHexString()),
                '16:00': this['16:00'].map((item) => item.toHexString()),
                '16:30': this['16:30'].map((item) => item.toHexString()),
                '17:00': this['17:00'].map((item) => item.toHexString()),
                '17:30': this['17:30'].map((item) => item.toHexString()),
                '18:00': this['18:00'].map((item) => item.toHexString()),
                '18:30': this['18:30'].map((item) => item.toHexString()),
                '19:00': this['19:00'].map((item) => item.toHexString()),
                '19:30': this['19:30'].map((item) => item.toHexString()),
                '20:00': this['20:00'].map((item) => item.toHexString()),
                '20:30': this['20:30'].map((item) => item.toHexString()),
                '21:00': this['21:00'].map((item) => item.toHexString()),
                '21:30': this['21:30'].map((item) => item.toHexString()),
            },
        };
    },
});

export const MedicalScheduleModel = mongoose.model<IMedicalSchedule>('MedicalSchedule', MedicalScheduleSchema);
