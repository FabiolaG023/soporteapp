import { IsNotEmpty, IsString, MinLength,  IsOptional, IsIn, IsDate } from "class-validator"
import { RolUsers } from "../users.entity";


export class UsersDto {
   
    @IsString() 
   // @IsNotEmpty() 
    @MinLength(5) 
    name: string;

    @IsString()
   // @IsOptional()
    tel: string;

    @IsString()
  //  @IsNotEmpty()
    email: string;

    @IsString()
    //@IsNotEmpty()
    userName: string;

    @IsString()
    //@IsNotEmpty()
    password: string;

   // @IsNotEmpty()
    @IsIn([RolUsers.ADMIN, RolUsers.USER])
    rol?: RolUsers;

}


export class updateUsersDto{
    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    tel?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    userName?: string;


    @IsString()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    @IsIn([ RolUsers.ADMIN, RolUsers.USER])
    rol?: RolUsers;
    


}
 