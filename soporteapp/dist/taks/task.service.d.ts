import { HttpException } from '@nestjs/common';
import { SupportDto } from 'src/support/dto/support.dto';
import { SupportEntity } from 'src/support/support.entity';
import { Repository } from 'typeorm';
import { TaskDto, updateTaskDto } from './dto/task.dto';
import { TaskEntity } from './task.entity';
export declare class TaksService {
    private taskRespo;
    private supportRespo;
    constructor(taskRespo: Repository<TaskEntity>, supportRespo: Repository<SupportEntity>);
    getAllTasks(): Promise<TaskEntity[]>;
    getStatusTasks(): Promise<any>;
    createTask(task: any, taskDto: TaskDto): Promise<TaskEntity>;
    createSupport(support: SupportDto): Promise<SupportEntity>;
    desactiveTask(id: any, isActive: boolean): Promise<HttpException | (TaskEntity & false) | (TaskEntity & true)>;
    readTaskById(id: number): Promise<TaskEntity>;
    statusUpdate(id: any, status: updateTaskDto): Promise<HttpException | (TaskEntity & updateTaskDto)>;
    updateTask(id: number, task: updateTaskDto): Promise<HttpException | (TaskEntity & updateTaskDto)>;
}
