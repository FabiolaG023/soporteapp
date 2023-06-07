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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaksController = void 0;
const common_1 = require("@nestjs/common");
const task_dto_1 = require("./dto/task.dto");
const task_service_1 = require("./task.service");
let TaksController = class TaksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    getTasks() {
        return this.tasksService.getAllTasks();
    }
    getStatatusTasks() { return this.tasksService.getStatusTasks(); }
    addtask(newTask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.tasksService.createTask(newTask, newTask);
            }
            catch (error) {
                throw new common_1.HttpException({ error: 'La Tarea  ya existe, inserte otra' }, common_1.HttpStatus.CONFLICT);
            }
        });
    }
    getOneTask(id) {
        return this.tasksService.readTaskById(id);
    }
    desactiveTask(id, isActive) {
        return this.tasksService.desactiveTask(id, isActive);
    }
    updateTask(id, updatedTask) {
        return this.tasksService.updateTask(id, updatedTask);
    }
    updateStatusTask(id, updatedTask) {
        return this.tasksService.statusUpdate(id, updatedTask);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaksController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Get)('/taskStatus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaksController.prototype, "getStatatusTasks", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [task_dto_1.TaskDto]),
    __metadata("design:returntype", Promise)
], TaksController.prototype, "addtask", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaksController.prototype, "getOneTask", null);
__decorate([
    (0, common_1.Patch)('/desactive/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", void 0)
], TaksController.prototype, "desactiveTask", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, task_dto_1.updateTaskDto]),
    __metadata("design:returntype", void 0)
], TaksController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Patch)('/updateStatus/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, task_dto_1.updateTaskDto]),
    __metadata("design:returntype", void 0)
], TaksController.prototype, "updateStatusTask", null);
TaksController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaksService])
], TaksController);
exports.TaksController = TaksController;
//# sourceMappingURL=taks.controller.js.map