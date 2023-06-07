import { Injectable, UnauthorizedException } from '@nestjs/common';

import { Repository } from 'typeorm';
import { RecordEntity } from './record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordDto } from './dto/record.dto';

@Injectable()
export class RecordService {

constructor(@InjectRepository(RecordEntity) 
private recordRespo: Repository<RecordEntity> ){}


getAllRecords(){
return  this.recordRespo.find({where: {}});
}


 searchForDateRecord(date: Date){
    return this.recordRespo.findBy({createdOn: date})
} 

createRecord(record: RecordDto){
this.recordRespo.findOne({where:{accion: record.accion}})
try {
    const newrecordData = this.recordRespo.create(record)
    return   this.recordRespo.save(newrecordData)
} catch (error) {
    throw new UnauthorizedException()
}


}

/* createSupport(support: SupportDto){
    this.supportRespo.findOne({ where: {name: support.name}})
    const newSupport =  this.supportRespo.create(support)
    return this.supportRespo.save(newSupport)
} */

}
