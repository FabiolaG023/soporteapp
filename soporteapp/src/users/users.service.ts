import {  HttpStatus, Injectable } from '@nestjs/common';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto, updateUsersDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt'
import {UsersEntity } from './users.entity';



export type User ={
id: number;
name: string;
userName: string;
password: string;

}

// crear auth, hash 

@Injectable()
export class UsersService {
   usersService: any;
   data: any = this.userRespo
   private readonly users: User[] = this.data


constructor(
   @InjectRepository(UsersEntity)
    private readonly userRespo: Repository<UsersEntity>){} 



getAllUsers(){
   return this.userRespo.find( {where: { isActive: true }})
}
   

async getUser(userName: string): Promise<User | undefined> {
   try {
      return this.users.find(user => user.userName === userName); 
   } catch (error) {
      throw new UnauthorizedException()
   }

 }

//actualizado
createUser(user: UsersDto){  
   this.userRespo.findOne({where:{name: user.userName}})
   try {
      const newUser = this.userRespo.create(user)
        return  this.userRespo.save(newUser)
   } catch (error) {
      throw new UnauthorizedException()
   }
  
}

//actualizado
  async deleteUser(id: string ){
   const result = await this.userRespo.delete({id})

   try {
      return result
   } catch (error) {
      if(result.affected === 0){
         return new HttpException('User no encontrado', HttpStatus.NOT_FOUND)
         
      }
      throw new UnauthorizedException()
   }
   }


     //usado
  async desactivarUser(id: any) {
    const desactivar = await this.userRespo.preload({ id, isActive: false });
     return await this.userRespo.save(desactivar);
    }


//actualizado
   async getUserByName(userName: string): Promise<UsersEntity>{

      try {
         return await this.userRespo.findOne({where:{userName}});
      } catch (error) {
         throw new UnauthorizedException()
      }


   }

//actualizado
  async readUser(id: string){
   const userFound = await this.userRespo.findOne({where:{id}})
   try {
      return userFound
      
   } catch (error) {
      
      if(!userFound){
         return new HttpException('User no encontrado', HttpStatus.NOT_FOUND)
      }
      throw new UnauthorizedException(`Usuario:${userFound.userName}, no encontrado`)
   }
   }


//actualizado
  async updateUser(id: string, user: updateUsersDto){
   const userFound = await this.userRespo.findOne({where:{id, isActive: true}})
   try {
      const userUpdate = Object.assign(userFound, user);
      return this.userRespo.save(userUpdate);

      
   } catch (error) {
      
      if (!userFound) {
         return new HttpException('User no encontrado', HttpStatus.NOT_FOUND) 
      }
      throw new UnauthorizedException(`Usuario:${userFound.userName}, no encontrado`)

      
   }
     

   }



}
