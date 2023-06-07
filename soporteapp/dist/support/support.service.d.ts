import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SupportDto, updateSupportDto } from './dto/support.dto';
import { SupportEntity } from './support.entity';
export declare class SupportService {
    private supportRespo;
    constructor(supportRespo: Repository<SupportEntity>);
    getSupport(): Promise<SupportEntity[]>;
    createSupport(support: SupportDto): Promise<SupportEntity>;
    readSupport(id: number): Promise<SupportEntity>;
    desactiveSupport(id: any, isActive: boolean): Promise<HttpException | (SupportEntity & false) | (SupportEntity & true)>;
    updateSupport(id: number, updateSupport: updateSupportDto): Promise<import("typeorm").UpdateResult>;
}
