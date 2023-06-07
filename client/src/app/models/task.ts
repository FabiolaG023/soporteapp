export class Task{
   id?: number;
    description: string;
    employeeName: string;
    department: string;
    extDepart: string;
    supportId: number;  
    typeRequest: string;

    constructor(
        description: string,
        employeeName: string,
        department: string,
        extDepart: string,
        supportId: number,  
        typeRequest: string
    
    ){
      this.description =  description;
      this.employeeName = employeeName;
      this.department = department;
      this.extDepart = extDepart;
      this.supportId = supportId;  
      this.typeRequest = typeRequest;
    }
}
