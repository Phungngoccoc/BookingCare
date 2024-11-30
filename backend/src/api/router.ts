import express, { Request, Response, NextFunction } from 'express';
import doctorRouter from './doctor/doctor.router';
import userRouter from './user/user.router';
import hospitalRouter from './hospital/hospital.router';
import medicalServiceRouter from './medical-service/medical-service.router';
import { MedicalServicesModel, MedicalDetailModel } from '@common/medical-services/medical-service';

const router = express.Router();

router.get('/test', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    res.status(200).json({ mess: 'OK!' }).end();
});

router.post('/create', async (req: Request, res: Response): Promise<void> => {
    try {
        const { data } = req.body;

        await MedicalDetailModel.insertMany(data);
        res.sendJson({
            data: 'OK',
        });
        return;
    } catch (err) {
        res.status(400);
    }
});

router.use('/hospital', hospitalRouter);

router.use('/doctor', doctorRouter);

router.use('/user', userRouter);

router.use('/medical-service', medicalServiceRouter);

// router.use('/medical-schedule');

export default router;
