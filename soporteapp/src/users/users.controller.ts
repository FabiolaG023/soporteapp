import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post  } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';


import { UsersDto, updateUsersDto } from './dto/users.dto';
import { UsersEntity } from './users.entity';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get('all')
    getUsers(): Promise<UsersEntity[]>{
        return this.userService.getAllUsers()
    }

    @Post('/add')
      async createUser(@Body() newUser:UsersDto){
     console.log(newUser)
      return await this.userService.createUser(newUser);
    } 

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:string){
      return this.userService.readUser(id)
    }
    @Delete('/desactive/:id')
    desactivarUser(@Param('id', ParseIntPipe) id: any){
      return this.userService.desactivarUser(id);
    }
 // para borrar permanantemente
 /*    @Delete(':id')
    deleteUsers(@Param('id', ParseIntPipe) id: string){
      return this.userService.deleteUser(id)
   } */
    @Patch('/update/:id')
    updateUsers(@Param('id', ParseIntPipe) id: string, @Body() updatedUsers: updateUsersDto){
     return  this.userService.updateUser(id, updatedUsers)
   } 


  









}
