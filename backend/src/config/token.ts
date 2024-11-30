import { IUserDataToken } from '@common/user/user.interface';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ACCESSTOKEN_SECRET, REFETCHTOKEN_SECRET } from './environment';
import { has } from 'lodash';

export interface IToken {
    accessToken: string;
}

export class Token {
    public static genderToken = async (payload: IUserDataToken): Promise<unknown> => {
        const { phone, id, email } = payload;

        if (phone) {
            const round = 3;
            const slat = await bcrypt.genSalt(round);
            const hash = await bcrypt.hash(ACCESSTOKEN_SECRET, slat);
            const data = {
                phone,
                id,
                email,
                hash,
            };
            const token = btoa(JSON.stringify(data));
            return {
                accessToken: token,
            };
        }

        return false;
    };

    public static verifyToken = async (req: IUserDataToken): Promise<Boolean> => {
        const parser = JSON.parse(atob(req.hash));

        const { hash } = parser;

        if (hash) {
            const check = await bcrypt.compare(hash, ACCESSTOKEN_SECRET);
            return check;
        }

        return false;
    };
}
