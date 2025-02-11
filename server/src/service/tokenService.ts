import jwt from "jsonwebtoken";
import { Token } from "../models/Token";

class TokenService {
  generateToken(payload: { id: number; username: string }) {
    const accessToken = jwt.sign(payload, "jwt_access", {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, "jwt-refresh", {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, "jwt-refresh");
      return userData;
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, "jwt-refresh");
      return userData;
    } catch (err) {
      return null;
    }
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = await Token.findOne({ where: { userId: userId } });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return Token.update(
        { refreshToken: tokenData.refreshToken },
        { where: { userId: userId } }
      );
    }
    const token = await Token.create({
      userId: userId,
      refreshToken: refreshToken,
    });
    return token;
  }

  async removeToken(refreshToken: string) {
    const tokenData = await Token.destroy({
      where: { refreshToken: refreshToken },
    });
    return tokenData;
  }

  async findToken(refreshToken: string) {
    const tokenData = await Token.findOne({
      where: { refreshToken: refreshToken },
    });
    return tokenData;
  }
}

export default new TokenService();
