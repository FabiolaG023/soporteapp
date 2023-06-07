import { AuthService } from './auth.service';
import { UsersDto } from 'src/users/dto/users.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersEntity } from 'src/users/users.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: UsersDto): Promise<{
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
