import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { JwtPayload } from '../interface/jwt-payload.interface';

//INFO: JWT Strategy to implements JWT on nest
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    configService: ConfigService,
  ) {

    super({
    secretOrKey: configService.get('JWT_SECRET'),
     
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  async validate(payload: JwtPayload): Promise<UsersEntity> {
    const { id, rol, userName} = payload;
   // const user = await this.userRepository.findOneBy({ id });
    const user = await this.userRepository.findOne({where:{id}});
    console.log(user)
    if (!user) {
      throw new UnauthorizedException('Token Not Valid');
    }
    if (!user.isActive) {
      throw new UnauthorizedException('User is inactive');
    }
    return user;
  }
}
