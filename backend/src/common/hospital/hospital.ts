import mongoose, { Schema } from 'mongoose';

export interface IWorkingTime {
    timeStart: string;
    timeEnd: string;
}
export interface IHospital extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    img: string;
    address: string;
    phone: string;
    email: string;
    password: string;

    instruction: string;
    description: string;
    workingTime?: IWorkingTime;
    profressional?: string;
    medicalEquipment?: string;
    medicalEaminationProcess?: string;

    transform(): IResponseHospital;
    transformBasic(): IResponseBasicHospital;
}

export interface IResponseHospital {
    id: string;
    name: string;
    img: string;
    address: string;
    phone: string;
    email: string;

    instruction?: string;
    description?: string;
    workingTime?: IWorkingTime;
    profressional?: string;
    medicalEquipment?: string;
    medicalEaminationProcess?: string;
}

export interface IResponseBasicHospital {
    id: string;
    name: string;
    img: string;
}

const HospitalSchema = new Schema<IHospital>({
    name: { type: String },
    address: { type: String },
    img: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },

    instruction: { type: String },
    description: { type: String },
    workingTime: {
        timeStart: { type: String, default: null },
        timeEnd: { type: String, default: null },
    },
    profressional: { type: String, default: null },
    medicalEquipment: { type: String, default: null },
    medicalEaminationProcess: { type: String, default: null },
});

HospitalSchema.method({
    transform(): IResponseHospital {
        return {
            id: this._id.toHexString(),
            name: this.name,
            img: this.img,
            address: this.address,
            phone: this.phone,
            email: this.email,

            instruction: this.instruction,
            description: this.description,
            workingTime: this.IWorkingTime,
            profressional: this.profressional,
            medicalEquipment: this.medicalEquipment,
            medicalEaminationProcess: this.medicalEaminationProcess,
        };
    },
});

HospitalSchema.method({
    transformBasic(): IResponseBasicHospital {
        return {
            id: this._id.toHexString(),
            name: this.name,
            img: this.img,
        };
    },
});

export const HospitalModel = mongoose.model<IHospital>('Hospital', HospitalSchema);
