export declare enum Actions {
    CREACION = "CRE\u00D3",
    EDICION = "EDIT\u00D3",
    ELIMINACION = "ELIMIN\u00D3"
}
export declare class RecordEntity {
    id: string;
    accion: string;
    userInSession: string;
    task: number;
    support: string;
    user: string;
    createdOn: Date;
}
