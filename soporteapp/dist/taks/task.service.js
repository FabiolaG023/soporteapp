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
exports.TaksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const support_entity_1 = require("../support/support.entity");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TaksService = class TaksService {
    constructor(taskRespo, supportRespo) {
        this.taskRespo = taskRespo;
        this.supportRespo = supportRespo;
    }
    getAllTasks() {
        const activos = this.taskRespo.find({
            where: { isActive: true },
            relations: { support: true },
        });
        return activos;
    }
    getStatusTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            const [status, count] = yield this.taskRespo.findAndCount({ where: { isActive: true, } });
            const array = yield { status, count };
            const elem = array.status;
            var estado = [];
            let pendiente = [];
            let cancelado = [];
            let realizado = [];
            let aux;
            for (let i = 0; i < elem.length; i++) {
                estado.push(elem[i].statusTask);
                realizado = estado.filter(element => element == 'REALIZADO');
                pendiente = estado.filter(element => element == 'PENDIENTE');
                cancelado = estado.filter(element => element == 'CANCELADO');
                aux = [realizado, pendiente, cancelado];
            }
            return aux;
        });
    }
    createTask(task, taskDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const support = yield this.supportRespo.findOne({ where: { id: task.support_id } });
            const newTaskdata = this.taskRespo.create(taskDto);
            const newTask = new task_entity_1.TaskEntity();
            newTask.support = support;
            const data = newTaskdata;
            const d1 = JSON.stringify(newTask.support.id);
            const d2 = newTaskdata.support;
            newTaskdata.support = newTask.support;
            for (var i = 0; i < 2; i++) {
                data[i] = d1;
                console.log(data);
            }
            console.log(data);
            return yield this.taskRespo.save(data);
        });
    }
    createSupport(support) {
        this.supportRespo.findOne({ where: { name: support.name } });
        const newSupport = this.supportRespo.create(support);
        return this.supportRespo.save(newSupport);
    }
    desactiveTask(id, isActive) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFound = yield this.taskRespo.findOne({ where: { id: id } });
            if (!taskFound) {
                return new common_1.HttpException('Task no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const taskUpdate = Object.assign(taskFound, isActive);
            return this.taskRespo.save(taskUpdate);
        });
    }
    readTaskById(id) {
        return this.taskRespo.findOne({
            where: { id: id },
        });
    }
    statusUpdate(id, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFound = yield this.taskRespo.findOne({ where: { id: id } });
            if (!taskFound) {
                return new common_1.HttpException('Task no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const statusTask = Object.assign(taskFound, status);
            return this.taskRespo.save(statusTask);
        });
    }
    updateTask(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFound = yield this.taskRespo.findOne({ where: { id: id } });
            if (!taskFound) {
                return new common_1.HttpException('Task no encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            const taskUpdate = Object.assign(taskFound, task);
            return this.taskRespo.save(taskUpdate);
        });
    }
};
TaksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.TaskEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(support_entity_1.SupportEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TaksService);
exports.TaksService = TaksService;
//# sourceMappingURL=task.service.js.map