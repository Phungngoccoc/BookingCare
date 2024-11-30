import mongoose, { Schema } from 'mongoose';
import {
    IReponseMedicalServices,
    IMedicalServices,
    IMedicalDetail,
    IReponseMedicalDetial,
} from './medical-services.interface';

const MedicalServicesSchema = new Schema<IMedicalServices>(
    {
        img: { type: String },
        name: { type: String },
    },
    {
        timestamps: true,
    },
);

MedicalServicesSchema.method({
    transform(): IReponseMedicalServices {
        return {
            id: this._id.toHexString(),
            name: this.name,
            img: this.img,
        };
    },
});

const MedicalDetailSchema = new Schema<IMedicalDetail>({
    name: { type: String },
    img: { type: String },
    medical_service_id: { type: String },
});

MedicalDetailSchema.method({
    transform(): IReponseMedicalDetial {
        return {
            id: this._id.toHexString(),
            name: this.name,
            img: this.img,
            medical_service_id: this.medical_service_id,
        };
    },
});

export const MedicalServicesModel = mongoose.model<IMedicalServices>('AllService', MedicalServicesSchema);

export const MedicalDetailModel = mongoose.model<IMedicalDetail>('MedicalDetail', MedicalDetailSchema);
