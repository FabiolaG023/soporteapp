import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { updateTaskDto } from 'src/taks/dto/task.dto';
import { Repository } from 'typeorm';
import { SupportDto, updateSupportDto } from './dto/support.dto';
import { SupportEntity } from './support.entity';
import { TaskEntity } from 'src/taks/task.entity';

@Injectable()
export class SupportService {

constructor(@InjectRepository(SupportEntity) private supportRespo: Repository<SupportEntity>){}


getSupport(){
        return this.supportRespo.find({where:{isActive: true}})
}

createSupport(support: SupportDto){
    this.supportRespo.findOne({ where: {name: support.name}})
  const newSupport =  this.supportRespo.create(support)
    return this.supportRespo.save(newSupport)
}

readSupport(id: number){
  return this.supportRespo.findOne({where:{id: id}})
}

async desactiveSupport(id: any, isActive: boolean){
  const supportFound = await this.supportRespo.findOne({where:{id: id}});
  if (!supportFound) {
    return new HttpException('Soporte no encontrado', HttpStatus.NOT_FOUND)
    
  }
  const supportUpdate = Object.assign(supportFound, isActive);
  return this.supportRespo.save(supportUpdate);
}

/* deleteSupport(id: number){
  return this.supportRespo.delete(id)
} */

updateSupport( id: number, updateSupport: updateSupportDto){

  return this.supportRespo.update({id: id}, updateSupport)

}


}
