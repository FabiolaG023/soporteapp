import { HttpException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { UsersDto, updateUsersDto } from './dto/users.dto';
import { UsersEntity } from './users.entity';
export type User = {
    id: number;
    name: string;
    userName: string;
    password: string;
};
export declare class UsersService {
    private readonly userRespo;
    usersService: any;
    data: any;
    private readonly users;
    constructor(userRespo: Repository<UsersEntity>);
    getAllUsers(): Promise<UsersEntity[]>;
    getUser(userName: string): Promise<User | undefined>;
    createUser(user: UsersDto): Promise<UsersEntity>;
    deleteUser(id: string): Promise<HttpException | import("typeorm").DeleteResult>;
    desactivarUser(id: any): Promise<UsersEntity>;
    getUserByName(userName: string): Promise<UsersEntity>;
    readUser(id: string): Promise<UsersEntity | HttpException>;
    updateUser(id: string, user: updateUsersDto): Promise<HttpException | (UsersEntity & updateUsersDto)>;
}
