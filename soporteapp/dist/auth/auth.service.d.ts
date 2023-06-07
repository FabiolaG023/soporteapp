import { UsersDto } from 'src/users/dto/users.dto';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthService {
    private readonly userRespo;
    private readonly jwtService;
    constructor(userRespo: Repository<UsersEntity>, jwtService: JwtService);
    create(userDto: UsersDto): Promise<{
        token: string;
        id: string;
        name: string;
        userName: string;
        tel: string;
        email: string;
        password: string;
        rol: import("src/users/users.entity").RolUsers;
        isActive: boolean;
        createdOn: Date;
        modifiedOn: Date;
    }>;
    login(loginDto: LoginUserDto): Promise<{
        token: string;
        id: string;
        name: string;
        userName: string;
        tel: string;
        email: string;
        password: string;
        rol: import("src/users/users.entity").RolUsers;
        isActive: boolean;
        createdOn: Date;
        modifiedOn: Date;
    }>;
    private getJwtToken;
    checkAuthStatus(user: UsersEntity): Promise<{
        token: string;
        id: string;
        name: string;
        userName: string;
        tel: string;
        email: string;
        password: string;
        rol: import("src/users/users.entity").RolUsers;
        isActive: boolean;
        createdOn: Date;
        modifiedOn: Date;
    }>;
}
