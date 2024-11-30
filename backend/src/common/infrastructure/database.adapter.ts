import mongoose, { mongo } from 'mongoose';
import { MONGODB_URL } from '@config/environment';

export class DatabaseAdapter {
    public static async connect(): Promise<void> {
        try {
            await mongoose.connect(MONGODB_URL, {});
            console.log('ConnectDB :: Sucess');
        } catch (err) {
            console.error(err);
        }
    }

    public static async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
        } catch (err) {
            console.error(err);
        }
    }
}
