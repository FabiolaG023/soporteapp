"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerDbExceptions = void 0;
const common_1 = require("@nestjs/common");
const bad_request_exception_1 = require("@nestjs/common/exceptions/bad-request.exception");
const logger = new common_1.Logger('DataBase Errors');
const handlerDbExceptions = (error) => {
    if (error.code === '23505')
        throw new bad_request_exception_1.BadRequestException(error.detail);
    logger.error(error);
    throw new common_1.InternalServerErrorException();
};
exports.handlerDbExceptions = handlerDbExceptions;
//# sourceMappingURL=hadle-errors.js.map