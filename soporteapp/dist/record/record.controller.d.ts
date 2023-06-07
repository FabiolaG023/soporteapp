import { RecordService } from './record.service';
import { RecordDto } from './dto/record.dto';
export declare class RecordController {
    private recordService;
    constructor(recordService: RecordService);
    getAllRecords(): Promise<import("./record.entity").RecordEntity[]>;
    searchForDateRecord(date: Date): Promise<import("./record.entity").RecordEntity[]>;
    createRecord(newRecord: RecordDto): Promise<import("./record.entity").RecordEntity>;
}
