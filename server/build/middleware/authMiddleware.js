"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const apiErrors_1 = require("../exceptions/apiErrors");
const tokenService_1 = __importDefault(require("../service/tokenService"));
function authMiddleware(req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(apiErrors_1.ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
            return next(apiErrors_1.ApiError.UnauthorizedError());
        }
        const userData = tokenService_1.default.validateAccessToken(accessToken);
        if (!userData) {
            return next(apiErrors_1.ApiError.UnauthorizedError());
        }
        req.user = userData;
        next();
    }
    catch (err) {
        return next(apiErrors_1.ApiError.UnauthorizedError());
    }
}
//# sourceMappingURL=authMiddleware.js.map