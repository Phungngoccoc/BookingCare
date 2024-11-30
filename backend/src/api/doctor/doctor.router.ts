import express from 'express';
import { DoctorController } from './doctor.controller';
import { validate } from 'express-validation';
import { getDetialDoctor } from '@api/auth/auth.doctor';

const router = express.Router();

router.post('/create-doctor', DoctorController.createDoctor);

router.get('/feature-doctor', DoctorController.getFeaturedDoctor);

router.get('/detail-doctor', validate(getDetialDoctor, { context: true }), DoctorController.getDetialDoctor);

export default router;
