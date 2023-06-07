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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersService = class UsersService {
    constructor(userRespo) {
        this.userRespo = userRespo;
        this.data = this.userRespo;
        this.users = this.data;
    }
    getAllUsers() {
        return this.userRespo.find({ where: { isActive: true } });
    }
    getUser(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.users.find(user => user.userName === userName);
            }
            catch (error) {
                throw new exceptions_1.UnauthorizedException();
            }
        });
    }
    createUser(user) {
        this.userRespo.findOne({ where: { name: user.userName } });
        try {
            const newUser = this.userRespo.create(user);
            return this.userRespo.save(newUser);
        }
        catch (error) {
            throw new exceptions_1.UnauthorizedException();
        }
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRespo.delete({ id });
            try {
                return result;
            }
            catch (error) {
                if (result.affected === 0) {
                    return new exceptions_1.HttpException('User no encontrado', common_1.HttpStatus.NOT_FOUND);
                }
                throw new exceptions_1.UnauthorizedException();
            }
        });
    }
    desactivarUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const desactivar = yield this.userRespo.preload({ id, isActive: false });
            return yield this.userRespo.save(desactivar);
        });
    }
    getUserByName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.userRespo.findOne({ where: { userName } });
            }
            catch (error) {
                throw new exceptions_1.UnauthorizedException();
            }
        });
    }
    readUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.userRespo.findOne({ where: { id } });
            try {
                return userFound;
            }
            catch (error) {
                if (!userFound) {
                    return new exceptions_1.HttpException('User no encontrado', common_1.HttpStatus.NOT_FOUND);
                }
                throw new exceptions_1.UnauthorizedException(`Usuario:${userFound.userName}, no encontrado`);
            }
        });
    }
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userFound = yield this.userRespo.findOne({ where: { id, isActive: true } });
            try {
                const userUpdate = Object.assign(userFound, user);
                return this.userRespo.save(userUpdate);
            }
            catch (error) {
                if (!userFound) {
                    return new exceptions_1.HttpException('User no encontrado', common_1.HttpStatus.NOT_FOUND);
                }
                throw new exceptions_1.UnauthorizedException(`Usuario:${userFound.userName}, no encontrado`);
            }
        });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map