export interface UserLogin {
    email: string;
    password: string;
}

export interface UserInput {
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
}

export interface UserOutPut extends UserInput {
    _id: string;
    image?: string;
    projects?: string[];
}