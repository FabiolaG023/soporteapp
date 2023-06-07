import { Repository } from 'typeorm';
import { RecordEntity } from './record.entity';
import { RecordDto } from './dto/record.dto';
export declare class RecordService {
    private recordRespo;
    constructor(recordRespo: Repository<RecordEntity>);
    getAllRecords(): Promise<RecordEntity[]>;
    searchForDateRecord(date: Date): Promise<RecordEntity[]>;
    createRecord(record: RecordDto): Promise<RecordEntity>;
}
