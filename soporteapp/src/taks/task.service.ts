import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportDto } from 'src/support/dto/support.dto';
import { SupportEntity } from 'src/support/support.entity';

import { Repository } from 'typeorm';
import { TaskDto, updateTaskDto } from './dto/task.dto';
import { TaskEntity, TaskStatus } from './task.entity';

@Injectable()
export class TaksService {
  constructor(
    @InjectRepository(TaskEntity) private taskRespo: Repository<TaskEntity>,
    @InjectRepository(SupportEntity)
    private supportRespo: Repository<SupportEntity>,
  ) {}

  getAllTasks() {
    //  const tarea = this.taskRespo.find()
    // MUESTRA TODAS LAS TAREAS ACTIVAS Y SUS RELACIONES
    const activos = this.taskRespo.find({
      where: { isActive: true },
     relations: { support: true },
    });
    return activos;
  }

async getStatusTasks(){
 // const [status, count] = await this.taskRespo.findAndCount({select:{isActive: true, statusTask: true, }})
 const [status, count] = await this.taskRespo.findAndCount({where:{isActive: true,}})
  const array: any = await {status, count};

 const elem: any = array.status
  var estado = [];
  let pendiente: any = [];
  let cancelado: any = [];
  let realizado: any = [];
  let aux: any
  for (let i = 0; i < elem.length; i++) {
     estado.push(elem[i].statusTask)    
     realizado = estado.filter(element => element == 'REALIZADO')
     pendiente = estado.filter(element => element == 'PENDIENTE') 
     cancelado = estado.filter(element => element == 'CANCELADO') 
     aux = [realizado, pendiente, cancelado]

  }
  return aux
 }


 async createTask(task: any, taskDto: TaskDto) {
  const support = await this.supportRespo.findOne({where:{id: task.support_id}})
  const newTaskdata =  this.taskRespo.create(taskDto)
  const newTask = new TaskEntity();
  newTask.support = support;
 
 const data = newTaskdata
 const d1 = JSON.stringify (newTask.support.id)

 const d2 = newTaskdata.support

  newTaskdata.support = newTask.support
  
  for (var i = 0; i < 2; i++) {
    data[i] = d1;
    console.log(data);
}

  console.log( data)

  return  await this.taskRespo.save(data);

  }
 
  createSupport(support: SupportDto){
    this.supportRespo.findOne({ where: {name: support.name}})
    const newSupport =  this.supportRespo.create(support)
    return this.supportRespo.save(newSupport)
}



  async desactiveTask(id: any, isActive: boolean) {
    const taskFound = await this.taskRespo.findOne({ where: { id: id } });
    if (!taskFound) {
      return new HttpException('Task no encontrado', HttpStatus.NOT_FOUND);
    }
   const taskUpdate = Object.assign(taskFound, isActive);
   return this.taskRespo.save(taskUpdate);
  }

  readTaskById(id: number) {
    return this.taskRespo.findOne({
      where: { id: id },
    });
  }

  async statusUpdate(id: any, status: updateTaskDto){
  // const statusTask = await this.taskRespo.preload({id, status})
   const taskFound = await this.taskRespo.findOne({where:{id: id}})
   if (!taskFound) {
    return new HttpException('Task no encontrado', HttpStatus.NOT_FOUND);
  }
  const statusTask = Object.assign(taskFound, status);

  return this.taskRespo.save(statusTask);
  }

  async updateTask(id: number, task: updateTaskDto) {
    const taskFound = await this.taskRespo.findOne({ where: { id: id } });
    if (!taskFound) {
      return new HttpException('Task no encontrado', HttpStatus.NOT_FOUND);
    }
   const taskUpdate = Object.assign(taskFound, task);
   return this.taskRespo.save(taskUpdate);
  }
}
