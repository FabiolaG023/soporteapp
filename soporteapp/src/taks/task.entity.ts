import { RecordEntity} from 'src/record/record.entity';
import { SupportEntity } from 'src/support/support.entity';

import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  CANCELADO = 'CANCELADO',
  REALIZADO = 'REALIZADO',
  PENDIENTE = 'PENDIENTE',
}
export enum TaskType {
  AVERIA = 'AVERIA',
  SOLICITUD = 'SOLICITUD',
  MANTENIMIENTO = 'MANTENIMIENTO', 
}
export enum RequestType {
  SOFTWARE = 'SOFTWARE',
  HARDWARE = 'HARDWARE',
  RED = 'RED',
}

@Entity('task')
export class TaskEntity {
 @PrimaryGeneratedColumn()
  id: number;

  @Column() // para que se transforme en tabla
  description: string;

  @Column()
  employeeName: string; //solicitante

  @Column()
  department: string; // nombre departamento

  @Column()
  extDepart: string; // extencion del departamento

  @Column()
  typeTask: TaskType;

  @Column()
  typeRequest: RequestType;

  @Column({default: 'PENDIENTE'})
  statusTask: TaskStatus;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: () => 'NOW()' })
  createdOn: Date;

  @UpdateDateColumn()
  modifiedOn: Date;
  // sopporte a quien se le asignó
  @ManyToOne(() => SupportEntity,  (support) => support.tasks)
  @JoinColumn({name:'support_id'})
   support: SupportEntity; //== supportId en la DB 
  
  /*  @OneToMany(()=> RecordEntity, (record)=> record.tasks)
   records: RecordEntity[]; */
 /*   // RECORD
   @OneToMany(() => TaskEntity, (task) => task.support)
   tasks: TaskEntity[]; 
  
 */
}


