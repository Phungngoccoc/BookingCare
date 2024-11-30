import { QueueService } from '@common/queue/queue.service';
import { JobContant } from '@common/constant/constant.job';
import { repeat } from 'lodash';
import { DoneCallback, Job, Queue } from 'bull';
import { DoctorModel } from '@common/doctor/doctor';
import { MedicalScheduleModel } from '@common/medical-schedule/medical-schedule';

export class MedicalScheduleCronJob {
    private static JOB_NAME = JobContant.CREATE_MEDICAL_SCHEDULE;

    public static register = async (): Promise<Queue> => {
        const queue = await QueueService.getQueue(MedicalScheduleCronJob.JOB_NAME);

        queue.add({}, { repeat: { cron: '*/5 * * * *' } });
        queue.process(MedicalScheduleCronJob.handler);

        return queue;
    };

    public static handler = async (job: Job, done: DoneCallback) => {
        try {
            const doctors = await DoctorModel.find();

            const doctorsId = doctors.map((item) => item.transform().id);

            const records = doctorsId.map((item) => {
                return {
                    doctor_id: item,
                    schedule: {
                        '07:00': [],
                        '07:30': [],
                        '08:00': [],
                        '08:30': [],
                        '09:00': [],
                        '09:30': [],
                        '10:00': [],
                        '10:30': [],
                        '11:00': [],
                        '11:30': [],
                        '12:00': [],
                        '13:30': [],
                        '14:00': [],
                        '14:30': [],
                        '15:00': [],
                        '15:30': [],
                        '16:00': [],
                        '16:30': [],
                        '17:00': [],
                        '17:30': [],
                        '18:00': [],
                        '18:30': [],
                        '19:00': [],
                        '19:30': [],
                        '20:00': [],
                        '20:30': [],
                        '21:00': [],
                        '21:30': [],
                    },
                };
            });

            await MedicalScheduleModel.insertMany(records);

            console.log('Insert schedule booking sucess');
        } catch (err) {
            console.error(err);
        }
    };
}
