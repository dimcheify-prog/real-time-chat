import { User } from "../models/User";
import bcrypt from "bcrypt";
import TokenService from "./tokenService";
import UserDtos from "../dtos/userDtos";
import { ApiError } from "../exceptions/apiErrors";

class UserService {
  async register(username, password) {
    const candidate = await User.findOne({where: {username: username}});
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с таким почтовым адресом ${username} уже существует`
      );
    }
    const hashPassword = await bcrypt.hash(password, 3);

    const user = await User.create({
      username: username,
      password: hashPassword,
    });
    const userDto = new UserDtos(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  //   async activate(activationLink) {
  //     const user = await User.findByLink(activationLink);
  //     if (!user) {
  //       throw ApiError.BadRequest("Некорректая ссылка активации");
  //     }
  //     user.isActivated = true;
  //     await user.save();
  //   }

  async login(username, password) {
    const user = await User.findOne({ where: { username: username } });
    if (!user) {
      throw ApiError.BadRequest("Пользователь с данным ником не был найден");
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      throw ApiError.BadRequest("Не верный пароль");
    }

    const userDto = await new UserDtos(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDB) {
      // не проходит проверку полсле двух перезагрузок
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findByPk({ where: { id: userData } });
    const userDto = new UserDtos(user);
    const tokens = TokenService.generateToken({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

export default new UserService();
