"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Token_1 = require("../models/Token");
class TokenService {
    generateToken(payload) {
        const accessToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "15m",
        });
        const refreshToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "30d",
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    validateAccessToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        }
        catch (err) {
            return null;
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        }
        catch (err) {
            return null;
        }
    }
    async saveToken(userId, refreshToken) {
        const tokenData = await Token_1.Token.findOne({ where: { userId: userId } });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return Token_1.Token.update({ refreshToken: tokenData.refreshToken }, { where: { userId: userId } });
        }
        const token = await Token_1.Token.create({
            userId: userId,
            refreshToken: refreshToken,
        });
        return token;
    }
    async removeToken(refreshToken) {
        const tokenData = await Token_1.Token.destroy({
            where: { refreshToken: refreshToken },
        });
        return tokenData;
    }
    async findToken(refreshToken) {
        const tokenData = await Token_1.Token.findOne({
            where: { refreshToken: refreshToken },
        });
        return tokenData;
    }
}
exports.default = new TokenService();
//# sourceMappingURL=tokenService.js.map