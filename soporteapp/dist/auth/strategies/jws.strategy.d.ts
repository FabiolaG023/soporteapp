import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { JwtPayload } from '../interface/jwt-payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: Repository<UsersEntity>, configService: ConfigService);
    validate(payload: JwtPayload): Promise<UsersEntity>;
}
export {};
