import {  Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post  } from '@nestjs/common';
import { SupportDto, updateSupportDto } from './dto/support.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { SupportEntity } from './support.entity';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
    constructor( private supportService: SupportService){}

    @Get('all')
    getAllSupport(): Promise<SupportEntity[]>{
        return this.supportService.getSupport();
    }


    @Post('/add')
    async addSupport(@Body() newSupport: SupportDto){
        try {
         return await this.supportService.createSupport(newSupport);
        } catch{
        throw new HttpException({error: 'El soporte:, ' + newSupport.name+ ' ya existe, inserte otro'}, HttpStatus.CONFLICT)
        }
    }
    // LEER 
    @Get(':id')
    getSupport(@Param('id', ParseIntPipe) id: number): Promise<SupportEntity>{
        return this.supportService.readSupport(id)
    }
    // DESACTIVAR
    @Patch('/desactive/:id')
    desactiveSupport(@Param('id', ParseIntPipe) id: number,
     @Body() isActive: boolean){
        return this.supportService.desactiveSupport(id, isActive);
    }


   /*  @Delete(':id')
    deleteSupport(@Param('id', ParseIntPipe) id: number){
      return this.supportService.deleteSupport(id)
   } */
    // ACTUALIZAR LOS DATOS
    @Patch('/update/:id')
    updateSupport(@Param('id', ParseIntPipe) id: number, @Body() updateSupport: updateSupportDto){
        return this.supportService.updateSupport(id, updateSupport)
    }

}
