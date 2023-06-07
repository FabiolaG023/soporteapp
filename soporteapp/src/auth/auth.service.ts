import { Injectable, NotAcceptableException, UnauthorizedException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
//import { handlerDbExceptions } from 'src/common/helpers/handle-errors';
import { UsersDto } from 'src/users/dto/users.dto';
import { UsersEntity } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { handlerDbExceptions } from 'src/common/hadle-errors';



@Injectable()
export class AuthService {

    constructor( @InjectRepository(UsersEntity)
    private readonly userRespo: Repository<UsersEntity>,
    private readonly jwtService: JwtService,){}

// correcto
    async create(userDto: UsersDto){
        try{
            const {password,...userData} = userDto;
            const user = this.userRespo.create({...userData, password: bcrypt.hashSync(password, 10),});
            await this.userRespo.save(user);
            delete user.password;
            return {...user, token: this.getJwtToken({id: user.id,userName: user.userName, rol: user.rol}),};
        }
        catch(error){
            throw new UnauthorizedException('No se pudo crear el usuario');
        
        }
    }
//correcto
    async login( loginDto: LoginUserDto){
        const {password, userName} = loginDto;
        let user;
        try {
            const user = await this.userRespo.findOne({
                where: {userName},
                select:{ userName: true, id: true, rol: true},
            });
            return {...user, token: this.getJwtToken({id: user.id,userName: user.userName, rol: user.rol})} 
    
        } catch (error) {
            
            if (!user) {
                throw new UnauthorizedException(`Usuario:${userName}, no encontrado`)
            }
    
            if (!bcrypt.compareSync(password, user.password)) {
                throw new UnauthorizedException(`Password:${password}, no valido`)    
            }
         
          throw new UnauthorizedException('Credenciales incorrectas');
    
        }
    }


    private getJwtToken(payload: JwtPayload) {
        const token = this.jwtService.sign(payload);
        try {
   
            return token;
            
        } catch (error) {
            throw new UnauthorizedException()
        }

    
      }

      async checkAuthStatus(user: UsersEntity) {
        const data =  {...user,token: this.getJwtToken({ id: user.id,userName: user.userName, rol: user.rol })};
        try {
            return data
        } catch (error) {   
            throw new UnauthorizedException('La session a Expirado!')
        }
      
      }

 




}

