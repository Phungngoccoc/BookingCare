import { Joi, schema } from 'express-validation';
import { values } from 'lodash';
import { TimeConstant } from '@common/constant/constant.time';

export const userSignup: schema = {
    body: Joi.object({
        phone: Joi.string()
            .trim()
            .regex(/^[0-9]{8,12}$/)
            .allow(null),
        email: Joi.string().trim().email().allow(null),
    }).xor('phone', 'email'),
};

export const getAllBooking: schema = {
    body: Joi.object({
        medical_schedule_id: Joi.string().trim().required(),
        time_booking: Joi.string()
            .trim()
            .required()
            .valid(...values(TimeConstant)),
        token: Joi.string().trim().required(),
    }),
};

export const getDetailBooking: schema = {
    body: Joi.object({
        medical_schedule_id: Joi.string().trim().required(),
        token: Joi.string().trim().required(),
    }),
};
