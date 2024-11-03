export interface User{
    id?: number;
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}