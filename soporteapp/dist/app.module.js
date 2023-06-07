"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_module_1 = require("./taks/task.module");
const users_module_1 = require("./users/users.module");
const support_module_1 = require("./support/support.module");
const users_entity_1 = require("./users/users.entity");
const task_entity_1 = require("./taks/task.entity");
const support_entity_1 = require("./support/support.entity");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const common_module_1 = require("./common/common.module");
const record_module_1 = require("./record/record.module");
const record_entity_1 = require("./record/record.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: +process.env.DB_PORT,
                database: process.env.DB_NAME,
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                autoLoadEntities: true,
                synchronize: true,
                entities: [task_entity_1.TaskEntity, users_entity_1.UsersEntity, support_entity_1.SupportEntity, record_entity_1.RecordEntity],
            }),
            auth_module_1.AuthModule,
            task_module_1.TaksModule,
            users_module_1.UsersModule,
            support_module_1.SupportModule,
            common_module_1.CommonModule,
            record_module_1.RecordModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map