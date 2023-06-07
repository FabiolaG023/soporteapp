import {IsNotEmpty, IsOptional} from "class-validator";






export class RecordDto {

    @IsNotEmpty()
     accion: string;
  
    @IsNotEmpty()
    userInSession: string;

    @IsOptional()
    task?: number;
    //support
     @IsOptional()
    support?: string;
    //user
     @IsOptional()
    user?: string;

  }