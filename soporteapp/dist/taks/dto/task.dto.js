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
exports.updateTaskDto = exports.TaskDto = void 0;
const class_validator_1 = require("class-validator");
const task_entity_1 = require("../task.entity");
class TaskDto {
    ;
}
__decorate([
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], TaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], TaskDto.prototype, "employeeName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TaskDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TaskDto.prototype, "extDepart", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], TaskDto.prototype, "support_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([task_entity_1.TaskType.AVERIA, task_entity_1.TaskType.MANTENIMIENTO, task_entity_1.TaskType.SOLICITUD]),
    __metadata("design:type", String)
], TaskDto.prototype, "typeTask", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsIn)([task_entity_1.RequestType.HARDWARE, task_entity_1.RequestType.SOFTWARE, task_entity_1.RequestType.RED]),
    __metadata("design:type", String)
], TaskDto.prototype, "typeRequest", void 0);
exports.TaskDto = TaskDto;
class updateTaskDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateTaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateTaskDto.prototype, "employeeName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateTaskDto.prototype, "department", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], updateTaskDto.prototype, "extDepart", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([task_entity_1.RequestType.HARDWARE, task_entity_1.RequestType.SOFTWARE, task_entity_1.RequestType.RED]),
    __metadata("design:type", String)
], updateTaskDto.prototype, "typeRequest", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([task_entity_1.TaskType.AVERIA, task_entity_1.TaskType.MANTENIMIENTO, task_entity_1.TaskType.SOLICITUD]),
    __metadata("design:type", String)
], updateTaskDto.prototype, "typeTask", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)([task_entity_1.TaskStatus.REALIZADO, task_entity_1.TaskStatus.PENDIENTE, task_entity_1.TaskStatus.CANCELADO]),
    __metadata("design:type", String)
], updateTaskDto.prototype, "statusTask", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], updateTaskDto.prototype, "support", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], updateTaskDto.prototype, "isActive", void 0);
exports.updateTaskDto = updateTaskDto;
//# sourceMappingURL=task.dto.js.map