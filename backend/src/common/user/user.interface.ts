export interface IUserDataToken {
    phone: string;
    email?: string;
    id: string;
    hash: string;
}

export interface IUserAuth {
    id: string;
    phone: string;
    email: string;
}

export interface IUserLogin {
    phone?: string;
    email?: string;
}

export interface IUserJobEmail {
    email: string;
    otp: string;
}

export interface IUserOTP {
    otp: string;
}
