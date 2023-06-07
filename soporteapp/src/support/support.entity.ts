import { RecordEntity } from "src/record/record.entity";
import { TaskEntity } from "src/taks/task.entity";

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, ManyToOne, OneToOne } from "typeorm";



@Entity('support')
export class SupportEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column({ default: true})
    isActive: boolean

    @Column({default: () => "NOW()"})
    createdOn: Date;

    @UpdateDateColumn()
    modifiedOn: Date;
    
   // TAREA ASIGNADA
   @OneToMany(() => TaskEntity, (task) => task.support)
   tasks: TaskEntity[]; 



/* 
   @OneToMany(()=> RecordEntity, (record)=> record.supports)
   records: RecordEntity[];
 */
   /*  @ManyToOne( ()=> TaskEntity, (task)=> task.id)
    tasks: TaskEntity[]
     */

}