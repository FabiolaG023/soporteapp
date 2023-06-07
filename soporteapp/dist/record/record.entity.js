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
exports.RecordEntity = exports.Actions = void 0;
const typeorm_1 = require("typeorm");
var Actions;
(function (Actions) {
    Actions["CREACION"] = "CRE\u00D3";
    Actions["EDICION"] = "EDIT\u00D3";
    Actions["ELIMINACION"] = "ELIMIN\u00D3";
})(Actions = exports.Actions || (exports.Actions = {}));
let RecordEntity = class RecordEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], RecordEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecordEntity.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RecordEntity.prototype, "userInSession", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], RecordEntity.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RecordEntity.prototype, "support", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], RecordEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => "NOW()" }),
    __metadata("design:type", Date)
], RecordEntity.prototype, "createdOn", void 0);
RecordEntity = __decorate([
    (0, typeorm_1.Entity)('record')
], RecordEntity);
exports.RecordEntity = RecordEntity;
//# sourceMappingURL=record.entity.js.map