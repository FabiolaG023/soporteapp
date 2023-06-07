import { SupportEntity } from "src/support/support.entity";
import { TaskEntity } from "src/taks/task.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export enum Actions {
    CREACION ='CREÓ',
    EDICION = 'EDITÓ',
    ELIMINACION = 'ELIMINÓ',
}

@Entity('record')
export class RecordEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    accion: string;

    //USER EN SESSION
    @Column()
    userInSession: string;

  // @ManyToOne(() => TaskEntity, (task)=> task.records)
  // @JoinColumn({name:'task'})
    @Column({nullable: true})
    task: number;
   //support

  // @ManyToOne(() => SupportEntity, (support)=> support.records)
  // @JoinColumn({name:'support'})
    @Column({nullable: true})
    support: string;
   //user

  // @ManyToOne(() => SupportEntity, (user)=> user.records)
  // @JoinColumn({name:'user'})
    @Column({nullable: true})
    user: string;
    
    @Column({default: () => "NOW()"})
    createdOn: Date;
}