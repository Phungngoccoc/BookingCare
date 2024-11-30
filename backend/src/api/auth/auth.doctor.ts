import { DoctorRank } from '@common/constant/constant.rank';
import { MedicalSpecialty } from '@common/constant/constant.specialty';
import { Joi, schema } from 'express-validation';
import { values } from 'lodash';

const doctorIdSchema = Joi.string().required();

export const getDetialDoctor: schema = {
    query: Joi.object({
        id: doctorIdSchema,
    }),
};

export const doctorSignup: schema = {
    body: {
        name: Joi.string()
            .trim()
            .required()
            .regex(/^[a-zA-Z]+$/)
            .min(3)
            .max(30),
        dob: Joi.date().required(),
        address: Joi.string().trim().required(),
        phone: Joi.string()
            .trim()
            .regex(/^[0-9]{8,12}$/)
            .allow(null),
        email: Joi.string().trim().required().email(),
        password: Joi.string().trim().required().min(6).max(45),
        rank: Joi.string()
            .trim()
            .required()
            .valid(...values(DoctorRank)),
        examination_price: Joi.string()
            .trim()
            .required()
            .default('0')
            .regex(/^[1-9]\d*$/),
        examinationAddress: Joi.string().trim().required(),
        hospital: Joi.string().trim().allow(null),
        specialty: Joi.string()
            .trim()
            .valid(...values(MedicalSpecialty)),
        description: Joi.array().items(Joi.string().trim().allow(null)).allow(null),
        education_process: Joi.array().items(Joi.string().trim().allow(null)).allow(null),
        work_process: Joi.array().items(Joi.string().trim().allow(null)).allow(null),
        prize: Joi.array().items(Joi.string().trim().allow(null)).allow(null),
        scientific_report: Joi.array().items(Joi.string().trim().allow(null)).allow(null),
    },
};
