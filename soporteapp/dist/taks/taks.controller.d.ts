import { HttpException } from '@nestjs/common';
import { TaskDto, updateTaskDto } from './dto/task.dto';
import { TaskEntity } from './task.entity';
import { TaksService } from './task.service';
export declare class TaksController {
    private tasksService;
    constructor(tasksService: TaksService);
    getTasks(): Promise<TaskEntity[]>;
    getStatatusTasks(): Promise<any>;
    addtask(newTask: TaskDto): Promise<TaskEntity>;
    getOneTask(id: number): Promise<TaskEntity>;
    desactiveTask(id: number, isActive: boolean): Promise<HttpException | (TaskEntity & false) | (TaskEntity & true)>;
    updateTask(id: number, updatedTask: updateTaskDto): Promise<HttpException | (TaskEntity & updateTaskDto)>;
    updateStatusTask(id: number, updatedTask: updateTaskDto): Promise<HttpException | (TaskEntity & updateTaskDto)>;
}
