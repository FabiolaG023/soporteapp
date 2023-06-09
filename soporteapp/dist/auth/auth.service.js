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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRespo, jwtService) {
        this.userRespo = userRespo;
        this.jwtService = jwtService;
    }
    create(userDto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password } = userDto, userData = __rest(userDto, ["password"]);
                const user = this.userRespo.create(Object.assign(Object.assign({}, userData), { password: bcrypt.hashSync(password, 10) }));
                yield this.userRespo.save(user);
                delete user.password;
                return Object.assign(Object.assign({}, user), { token: this.getJwtToken({ id: user.id, userName: user.userName, rol: user.rol }) });
            }
            catch (error) {
                throw new common_1.UnauthorizedException('No se pudo crear el usuario');
            }
        });
    }
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, userName } = loginDto;
            let user;
            try {
                const user = yield this.userRespo.findOne({
                    where: { userName },
                    select: { userName: true, id: true, rol: true },
                });
                return Object.assign(Object.assign({}, user), { token: this.getJwtToken({ id: user.id, userName: user.userName, rol: user.rol }) });
            }
            catch (error) {
                if (!user) {
                    throw new common_1.UnauthorizedException(`Usuario:${userName}, no encontrado`);
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    throw new common_1.UnauthorizedException(`Password:${password}, no valido`);
                }
                throw new common_1.UnauthorizedException('Credenciales incorrectas');
            }
        });
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        try {
            return token;
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
    }
    checkAuthStatus(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = Object.assign(Object.assign({}, user), { token: this.getJwtToken({ id: user.id, userName: user.userName, rol: user.rol }) });
            try {
                return data;
            }
            catch (error) {
                throw new common_1.UnauthorizedException('La session a Expirado!');
            }
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map