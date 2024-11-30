import express from 'express';
import { UserController } from './user.controller';
import { validate } from 'express-validation';
import { getAllBooking, getDetailBooking, userSignup } from '@api/auth/auth.user';
import { UserMiddleware } from '@api/auth/auth.user.middleware';

const router = express.Router();

router.get('/medical-services', UserController.getAllService);

router.post('/sign-up', validate(userSignup, { context: true }), UserController.userSignUp);

// router.get('/get-all-booking', validate(getAllBooking, { context: true }), UserController.getAllBooking);
router.get('/get-all-booking', UserController.getAllBooking);

router.get('/get-detail-booking', validate(getDetailBooking), UserMiddleware.auth, UserController.getDetailBooking);

export default router;
