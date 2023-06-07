import { RolUsers } from "../users.entity";
export declare class UsersDto {
    name: string;
    tel: string;
    email: string;
    userName: string;
    password: string;
    rol?: RolUsers;
}
export declare class updateUsersDto {
    name?: string;
    tel?: string;
    email?: string;
    userName?: string;
    password?: string;
    rol?: RolUsers;
}
