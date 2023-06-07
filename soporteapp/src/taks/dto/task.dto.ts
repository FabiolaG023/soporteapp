import {
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  IsIn,
  IsBoolean,
} from 'class-validator';
import { RequestType, TaskStatus, TaskType } from '../task.entity';
import { RecordEntity } from 'src/record/record.entity';

export class TaskDto {
  @MinLength(5)
  description: string;

  @IsString()
  // @IsNotEmpty()
  @MinLength(5)
  employeeName: string;

  @IsString()
  // @IsNotEmpty()
  department: string;

  @IsString()
  extDepart: string;

  @IsNotEmpty()
  support_id: number;

 /*  @IsNotEmpty()
 // @IsIn([])
  record_id: number */;

  @IsNotEmpty()
  @IsIn([TaskType.AVERIA, TaskType.MANTENIMIENTO, TaskType.SOLICITUD])
  typeTask: TaskType;

  // cuando se cree la tarea, el usurio en seccion debe guardarse aqui
  @IsNotEmpty()
  @IsIn([RequestType.HARDWARE, RequestType.SOFTWARE, RequestType.RED])
  typeRequest: RequestType;



}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  employeeName?: string;

  @IsString()
  @IsOptional()
  department?: string;

  @IsString()
  @IsOptional()
  extDepart?: string;

/*   @IsString()
  @IsOptional()
  userName?: number; */

  @IsString()
  @IsOptional()
  @IsIn([RequestType.HARDWARE, RequestType.SOFTWARE, RequestType.RED])
  typeRequest?: RequestType; 

  @IsString()
  @IsOptional()
  @IsIn([TaskType.AVERIA, TaskType.MANTENIMIENTO, TaskType.SOLICITUD])
  typeTask?: TaskType;

  @IsString()
  @IsOptional()
  @IsIn([TaskStatus.REALIZADO, TaskStatus.PENDIENTE, TaskStatus.CANCELADO])
  statusTask?: TaskStatus;
 
  @IsOptional()
  support?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
