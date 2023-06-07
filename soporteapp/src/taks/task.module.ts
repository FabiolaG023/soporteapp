import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportEntity } from 'src/support/support.entity';
import { UsersEntity } from 'src/users/users.entity';
import { TaksController } from './taks.controller';
import { TaskEntity } from './task.entity';
import { TaksService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity, SupportEntity])],
  controllers: [TaksController],
  providers: [TaksService]
})
export class TaksModule {}
