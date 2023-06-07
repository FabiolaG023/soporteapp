import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/taks/task.entity';
import { SupportController } from './support.controller';
import { SupportEntity } from './support.entity';
import { SupportService } from './support.service';

@Module({
  imports: [TypeOrmModule.forFeature([SupportEntity, TaskEntity])],
  controllers: [SupportController],
  providers: [SupportService]
})
export class SupportModule {}
