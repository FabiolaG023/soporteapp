import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  UseGuards, Request, HttpException, HttpStatus
} from '@nestjs/common';
import { TaskDto, updateTaskDto } from './dto/task.dto';
import { TaskEntity } from './task.entity';
import { TaksService } from './task.service';

//import {LocalAuthGuard} from '../auth/local-auth.guard'

// app.controller
@Controller('task')
export class TaksController {
  constructor(private tasksService: TaksService) {}


 // @Get('protected')
  @Get('all')
  getTasks(): Promise<TaskEntity[]> {
    return this.tasksService.getAllTasks();
  }

  @Get('/taskStatus')
  getStatatusTasks()
  { return this.tasksService.getStatusTasks();}


  @Post('/add')
  async addtask(@Body() newTask: TaskDto) {
    try {
      return await this.tasksService.createTask(newTask, newTask);
    } catch (error) {
      throw new HttpException({error: 'La Tarea  ya existe, inserte otra'}, HttpStatus.CONFLICT)

    }
   
  }


    //  LEER UNA TAREA
  @Get(':id')
  getOneTask(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.tasksService.readTaskById(id);
  }
    
  // PARA DESACTIVAR LAS TAREAS (actualiza el isActive)
  @Patch('/desactive/:id')
  desactiveTask(
    @Param('id', ParseIntPipe) id: number, 
     @Body() isActive: boolean) {
    return this.tasksService.desactiveTask(id, isActive);
  }

  // ACTUALIZAR LOS DATOS
  @Patch('/update/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedTask: updateTaskDto,
  ) {
    return this.tasksService.updateTask(id, updatedTask);
  }
  @Patch('/updateStatus/:id')
  updateStatusTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedTask: updateTaskDto,) {
    return this.tasksService.statusUpdate(id, updatedTask)
  }
}
