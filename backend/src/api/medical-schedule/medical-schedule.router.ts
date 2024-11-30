import { bookingMedicalSchemdule } from '@api/auth/auth.medical-schedule';
import { UserController } from '@api/user/user.controller';
import { MedicalScheduleService } from '@common/medical-schedule/medical-schedule.service';
import express from 'express';
import { validate } from 'express-validation';
import { MedicalScheduleController } from './medical-schedule.controller';

const router = express.Router();

router.post(
    '/booking',
    validate(bookingMedicalSchemdule, { context: true }),
    UserController.auth,
    MedicalScheduleController.bookingSchedule,
);
