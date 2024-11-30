import { JobContant } from '@common/constant/constant.job';
import { QueueService } from '@common/queue/queue.service';
import { DoneCallback, Job, Queue } from 'bull';
import nodemailer, { Transporter } from 'nodemailer';
import { EMAIL_ACCOUNT, EMAIL_PASSWORD } from '@config/environment';
import { IUserJobEmail } from '@common/user/user.interface';

export class UserSendMailJob {
    private static JOB_NAME = JobContant.SEND_MAIL_LOGIN;

    public static register = async (): Promise<Queue<unknown>> => {
        const queue = await QueueService.getQueue(UserSendMailJob.JOB_NAME);
        queue.process(UserSendMailJob.handler);
        return queue;
    };

    public static handler = async (job: Job<IUserJobEmail>, done: DoneCallback): Promise<void> => {
        try {
            const data = job.data;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: 'smtp.gmail.com',
                port: 587,
                secure: true,
                auth: {
                    user: EMAIL_ACCOUNT,
                    pass: EMAIL_PASSWORD,
                },
            });

            const infor = await transporter.sendMail({
                from: `Ngô Duy Vũ <${EMAIL_ACCOUNT}>`,
                to: data.email,
                subject: 'OPT - Mã xác nhận',
                text: 'OPT - Mã xác nhận',
                html: `
                    <h2>Cam on ban da su dung Booking Care</h2>
                    <p>Mã OPT của ban: <b>${data.otp}</b> </p>
                `,
            });

            console.log(infor.messageId);
            done();
        } catch (err) {
            console.error(err);
        }
    };
}
