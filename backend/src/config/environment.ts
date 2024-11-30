import * as dotenv from "dotenv";
dotenv.config();

export const PORT: number = parseInt(process.env.PORT) || 8080
export const MONGODB_URL : string = process.env.MONGODB_URL ;
export const ACCESSTOKEN_SECRET: string = process.env.ACCESS_TOKEN;
export const REFETCHTOKEN_SECRET: string = process.env.REFETCH_TOKEN;
export const REDIS_URL: string = process.env.REDIS_URL;
export const NODE_ENV : string= process.env.NODE_ENV || "develop";
export const EMAIL_ACCOUNT: string = process.env.MAILER_ACCOUNT;
export const EMAIL_PASSWORD: string = process.env.MAILER_PASSWORD;
export const LOG_LEVEL : string = process.env.LOG_LEVEL;
