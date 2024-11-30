import mongoose, { Schema, Document } from 'mongoose';

export interface IResponseUser {
    id: string;
    name?: string;
    sex?: string;
    phone: string;
    email: string;
    yob: string;
    city?: string;
    district?: string;
    address?: string;
    booking?: string[];
}

export interface IUser extends Document {
    name?: string;
    sex?: string;
    phone: string;
    email?: string;
    yob?: string;
    city?: string;
    district?: string;
    address?: string;
    booking?: Schema.Types.ObjectId[];

    transform(): IResponseUser;
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String },
        sex: { type: String },
        phone: { type: String, required: true },
        email: { type: String },
        yob: { type: String },
        city: { type: String },
        district: { type: String },
        address: { type: String },
        booking: [{ type: Schema.Types.ObjectId, ref: 'MedicalSchedule' }],
    },
    {
        timestamps: true,
    },
);

UserSchema.method({
    transform(): IResponseUser {
        return {
            id: this._id.toHexString(),
            name: this.name ?? undefined,
            sex: this.sex ?? undefined,
            phone: this.phone,
            email: this.email ?? undefined,
            yob: this.yob ?? undefined,
            city: this.city ?? undefined,
            district: this.district ?? undefined,
            address: this.address ?? undefined,
            booking: this.booking ? this.booking.map((item) => item.toHexString()) : [],
        };
    },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);
