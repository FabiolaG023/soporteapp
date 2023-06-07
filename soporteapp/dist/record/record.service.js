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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const record_entity_1 = require("./record.entity");
const typeorm_2 = require("@nestjs/typeorm");
let RecordService = class RecordService {
    constructor(recordRespo) {
        this.recordRespo = recordRespo;
    }
    getAllRecords() {
        return this.recordRespo.find({ where: {} });
    }
    searchForDateRecord(date) {
        return this.recordRespo.findBy({ createdOn: date });
    }
    createRecord(record) {
        this.recordRespo.findOne({ where: { accion: record.accion } });
        try {
            const newrecordData = this.recordRespo.create(record);
            return this.recordRespo.save(newrecordData);
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
};
RecordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(record_entity_1.RecordEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RecordService);
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map