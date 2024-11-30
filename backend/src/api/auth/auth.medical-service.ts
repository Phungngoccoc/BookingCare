import { Joi, schema } from 'express-validation';

const medicalServiceIdSchema = Joi.string().required();

const medicalServiceMajorIdSchema = Joi.string().required();

export const getMedicalService: schema = {
    query: Joi.object({
        id: medicalServiceIdSchema,
    }),
};

export const getMedicalServiceMajor: schema = {
    query: Joi.object({
        id: medicalServiceMajorIdSchema,
    }),
};
