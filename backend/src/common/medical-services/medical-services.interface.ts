import mongoose, { Schema } from 'mongoose';

export interface IMedicalDetailId {
    id: string;
}

export interface IMedicalMajorId {
    id: string;
}

export interface IMedicalServices {
    name: string;
    img: string;

    transform(): IReponseMedicalServices;
}

export interface IReponseMedicalServices {
    id: string;
    name: string;
    img: string;
}

export interface IMedicalDetail {
    name: string;
    img: string;
    medical_service_id: string;

    transform(): IReponseMedicalDetial;
}

export interface IReponseMedicalDetial {
    id: string;
    name: string;
    img: string;
    medical_service_id: string;
}
