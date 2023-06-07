import { TaskEntity } from "src/taks/task.entity";
import * as bcrypt from 'bcrypt'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn, UpdateDateColumn, BeforeInsert } from "typeorm";
import { RecordEntity } from "src/record/record.entity";

export enum RolUsers {
    ADMIN='ADMIN',
    USER='USER'
}

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
     id: string;

    @Column()
    name: string;

    @Column()
    userName: string;

    @Column()
    tel: string;

    @Column({unique: true})
    email: string;

    @Column({ type: 'varchar', length: 70, nullable: true })
    password: string;

     @BeforeInsert()
    async hashPass(){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
    async validatePass(password: string): Promise<boolean>{
        const isMach = await bcrypt.compare(password, this.password)
       // console.log(isMach, ' entidad')
        return isMach
    } 
 
    @Column({default: 'USER'})
    rol: RolUsers;
    
    @Column({ default: true})
    isActive: boolean

    @Column({default: () => "NOW()"})
    createdOn: Date;

    @UpdateDateColumn()
    modifiedOn: Date;

   /*  @OneToMany(()=> RecordEntity, (record)=> record.users)
    record: RecordEntity[];

 */



    


}


