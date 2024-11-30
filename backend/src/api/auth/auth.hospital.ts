import { Joi, schema } from 'express-validation';

const hospitalIdSchema = Joi.string().required();

export const getHospital: schema = {
    query: Joi.object({
        id: hospitalIdSchema,
    }),
};

export const createHospital: schema = {
    body: Joi.object({
        name: Joi.string().required().trim().min(3).max(200),
        img: Joi.string().required().trim(),
        address: Joi.string().trim().required(),
        phone: Joi.string()
            .trim()
            .regex(/^[0-9]{8,12}$/)
            .allow(null),
        email: Joi.string().trim().required().email(),
        password: Joi.string().trim().required().min(6).max(45),
        instruction: Joi.string().trim().required(),
        description: Joi.string().trim().required(),
        workingTime: Joi.object({
            timeStart: Joi.string().trim().required(),
            timeEnd: Joi.string().trim().required(),
        }).required(),
        profressional: Joi.string().trim().allow(null),
        medicalEquipment: Joi.string().trim().allow(null),
        medicalEaminationProcess: Joi.string().trim().allow(null),
    }),
};
