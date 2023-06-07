import { SupportEntity } from 'src/support/support.entity';
export declare enum TaskStatus {
    CANCELADO = "CANCELADO",
    REALIZADO = "REALIZADO",
    PENDIENTE = "PENDIENTE"
}
export declare enum TaskType {
    AVERIA = "AVERIA",
    SOLICITUD = "SOLICITUD",
    MANTENIMIENTO = "MANTENIMIENTO"
}
export declare enum RequestType {
    SOFTWARE = "SOFTWARE",
    HARDWARE = "HARDWARE",
    RED = "RED"
}
export declare class TaskEntity {
    id: number;
    description: string;
    employeeName: string;
    department: string;
    extDepart: string;
    typeTask: TaskType;
    typeRequest: RequestType;
    statusTask: TaskStatus;
    isActive: boolean;
    createdOn: Date;
    modifiedOn: Date;
    support: SupportEntity;
}
