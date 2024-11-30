import express from 'express';
import { validate } from 'express-validation';
import { getMedicalService, getMedicalServiceMajor } from '@api/auth/auth.medical-service';
import { MedicalServiceController } from './medical-service.controller';

const router = express.Router();

router.get('/get-all-medical-service', MedicalServiceController.getAllMedicalService);

router.get('/get-all-specialty', MedicalServiceController.getAllSpecialty);

router.get(
    '/get-detail-medical-service',
    validate(getMedicalService, { context: true }),
    MedicalServiceController.getDetailMedicalService,
);

router.get(
    '/get-medical-service-major',
    validate(getMedicalServiceMajor, { context: true }),
    MedicalServiceController.getMedicalMajor,
);

export default router;
