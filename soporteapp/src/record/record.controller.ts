import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordDto } from './dto/record.dto';

@Controller('record')
export class RecordController {

    constructor(private recordService: RecordService){}

@Get('/all')
getAllRecords(){return this.recordService.getAllRecords();}

@Post('/date')
searchForDateRecord(@Body() date: Date){
    try {
        return this.recordService.searchForDateRecord(date);
    } catch (error) {
        throw new HttpException({error: 'La Tarea  ya existe, inserte otra'}, HttpStatus.CONFLICT)
    }
}



@Post('/add')
async createRecord(@Body()  newRecord: RecordDto){
    console.log(newRecord)
return await this.recordService.createRecord(newRecord);
      
}





}

