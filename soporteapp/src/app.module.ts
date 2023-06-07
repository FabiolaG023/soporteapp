import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { TaksModule } from './taks/task.module';
import { UsersModule } from './users/users.module';
import { SupportModule } from './support/support.module';

import { UsersEntity } from './users/users.entity';
import { TaskEntity } from './taks/task.entity';
import { SupportEntity } from './support/support.entity';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/strategies/jws.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { CommonModule } from './common/common.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { RecordController } from './record/record.controller';
import { RecordService } from './record/record.service';
import { RecordModule } from './record/record.module';
import { RecordEntity } from './record/record.entity';


@Module({
  imports: [
  
  ConfigModule.forRoot(),

  TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
      entities: [TaskEntity, UsersEntity, SupportEntity, RecordEntity],
     // entities: [__dirname + '/**/*.entity{.ts, .js}']
  }), 
 // ServeStaticModule.forRoot({
   // rootPath: join(__dirname, '..', 'public'),
  //  rootPath: join(__dirname + '/**/*.entity{.ts, .js}'),
 // }),

  AuthModule,
  TaksModule,
  UsersModule,
  SupportModule,
  CommonModule,
  RecordModule
  
  ],

//  exports:[ TypeOrmModule, JwtStrategy, PassportModule, JwtModule]
})
export class AppModule {}

