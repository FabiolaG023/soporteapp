import {  IsString, MinLength,  IsOptional, IsBoolean } from "class-validator";


export class SupportDto{

    @IsString()
   // @MinLength(5)
    name: string;

    @IsString()
    phone: string;
    
   @IsString()
    email: string;

}

export class updateSupportDto{

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    phone?: string;
    
    @IsString()
    @IsOptional()
    email?: string;
    
    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

}

