import { HttpException } from '@nestjs/common/exceptions';
import { UsersDto, updateUsersDto } from './dto/users.dto';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<UsersEntity[]>;
    createUser(newUser: UsersDto): Promise<UsersEntity>;
    getUser(id: string): Promise<UsersEntity | HttpException>;
    desactivarUser(id: any): Promise<UsersEntity>;
    updateUsers(id: string, updatedUsers: updateUsersDto): Promise<HttpException | (UsersEntity & updateUsersDto)>;
}
