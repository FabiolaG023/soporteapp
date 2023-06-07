"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskEntity = exports.RequestType = exports.TaskType = exports.TaskStatus = void 0;
const support_entity_1 = require("../support/support.entity");
const typeorm_1 = require("typeorm");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["CANCELADO"] = "CANCELADO";
    TaskStatus["REALIZADO"] = "REALIZADO";
    TaskStatus["PENDIENTE"] = "PENDIENTE";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var TaskType;
(function (TaskType) {
    TaskType["AVERIA"] = "AVERIA";
    TaskType["SOLICITUD"] = "SOLICITUD";
    TaskType["MANTENIMIENTO"] = "MANTENIMIENTO";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
var RequestType;
(function (RequestType) {
    RequestType["SOFTWARE"] = "SOFTWARE";
    RequestType["HARDWARE"] = "HARDWARE";
    RequestType["RED"] = "RED";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
let TaskEntity = class TaskEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TaskEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "employeeName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "extDepart", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "typeTask", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TaskEntity.prototype, "typeRequest", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'PENDIENTE' }),
    __metadata("design:type", String)
], TaskEntity.prototype, "statusTask", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], TaskEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => 'NOW()' }),
    __metadata("design:type", Date)
], TaskEntity.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TaskEntity.prototype, "modifiedOn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => support_entity_1.SupportEntity, (support) => support.tasks),
    (0, typeorm_1.JoinColumn)({ name: 'support_id' }),
    __metadata("design:type", support_entity_1.SupportEntity)
], TaskEntity.prototype, "support", void 0);
TaskEntity = __decorate([
    (0, typeorm_1.Entity)('task')
], TaskEntity);
exports.TaskEntity = TaskEntity;
//# sourceMappingURL=task.entity.js.map