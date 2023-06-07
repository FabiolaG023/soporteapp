import { TaskEntity } from "src/taks/task.entity";
export declare class SupportEntity {
    id: number;
    name: string;
    phone: string;
    email: string;
    isActive: boolean;
    createdOn: Date;
    modifiedOn: Date;
    tasks: TaskEntity[];
}
