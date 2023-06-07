export declare enum RolUsers {
    ADMIN = "ADMIN",
    USER = "USER"
}
export declare class UsersEntity {
    id: string;
    name: string;
    userName: string;
    tel: string;
    email: string;
    password: string;
    hashPass(): Promise<void>;
    validatePass(password: string): Promise<boolean>;
    rol: RolUsers;
    isActive: boolean;
    createdOn: Date;
    modifiedOn: Date;
}
