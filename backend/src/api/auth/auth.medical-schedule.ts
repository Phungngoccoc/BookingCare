import { TimeConstant } from '@common/constant/constant.time';
import { Joi, schema } from 'express-validation';
import { values } from 'lodash';

export const bookingMedicalSchemdule: schema = {
    body: {
        medical_schedule_id: Joi.string().trim().required(),
        time_booking: Joi.string()
            .trim()
            .required()
            .valid(...values(TimeConstant)),
        token: Joi.string().trim().required(),
    },
};
