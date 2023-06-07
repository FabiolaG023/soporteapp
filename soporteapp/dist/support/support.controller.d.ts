import { SupportDto, updateSupportDto } from './dto/support.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { SupportEntity } from './support.entity';
import { SupportService } from './support.service';
export declare class SupportController {
    private supportService;
    constructor(supportService: SupportService);
    getAllSupport(): Promise<SupportEntity[]>;
    addSupport(newSupport: SupportDto): Promise<SupportEntity>;
    getSupport(id: number): Promise<SupportEntity>;
    desactiveSupport(id: number, isActive: boolean): Promise<HttpException | (SupportEntity & false) | (SupportEntity & true)>;
    updateSupport(id: number, updateSupport: updateSupportDto): Promise<import("typeorm").UpdateResult>;
}
