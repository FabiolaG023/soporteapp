import { RequestType, TaskStatus, TaskType } from '../task.entity';
export declare class TaskDto {
    description: string;
    employeeName: string;
    department: string;
    extDepart: string;
    support_id: number;
    typeTask: TaskType;
    typeRequest: RequestType;
}
export declare class updateTaskDto {
    description?: string;
    employeeName?: string;
    department?: string;
    extDepart?: string;
    typeRequest?: RequestType;
    typeTask?: TaskType;
    statusTask?: TaskStatus;
    support?: number;
    isActive?: boolean;
}
