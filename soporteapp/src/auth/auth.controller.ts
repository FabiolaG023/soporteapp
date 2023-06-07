import { Controller, Post, Body,
    Get,
    UseGuards,
    Req,
    Headers, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth, GetUser, RawHeaders, RoleProtected } from './decorators';
import { UsersDto } from 'src/users/dto/users.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersEntity } from 'src/users/users.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('register')
    create(@Body() createUserDto: UsersDto){
        return this.authService.create(createUserDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginUserDto){
        return this.authService.login(loginDto);
    }

    @Get('check-status')
    @Auth()
    checkAuthStatus(@GetUser() user: UsersEntity) {
      return this.authService.checkAuthStatus(user);
    }

}
