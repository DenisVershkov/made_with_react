const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dto/user-dto");
const ApiError = require("../exceptions/api-error");

class UserService {
  async signUp({ email, password, username }) {
    let candidate = await User.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(
        `Пользователь с почтовым адресом уже существует`
      );
    }
    candidate = await User.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(`Пользователь с таким логином уже существует`);
    }
    const hashPassword = await bcrypt.hash(password, 11);
    const activationLink = uuid.v4();
    await User.create({
      username,
      password: hashPassword,
      activationLink,
      email,
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.CLIENT_URL}/activation/success/${activationLink}`
    );
  }

  async signIn({ email, password }) {
    const candidate = await User.findOne({ email });
    if (!candidate) {
      throw ApiError.BadRequest(`Пользователь c таким email не найден`);
    }
    const isPassEquals = await bcrypt.compare(password, candidate.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest(`Неверный пароль`);
    }
    const userDto = new UserDto(candidate);
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async signOut(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async activate(activationLink) {
    const currentUser = await User.findOne({ activationLink });
    if (!currentUser) {
      throw ApiError.BadRequest("Некорректная ссылка активации");
    }
    currentUser.isActivated = true;
    await currentUser.save();
    const userDto = new UserDto(currentUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async sendResetPasswordLetter(email) {
    const activationLink = uuid.v4();
    const currentUser = await User.findOneAndUpdate({email}, { activationLink: activationLink });
    if (!currentUser) {
      throw ApiError.BadRequest(`Пользователь c таким email не найден`);
    } else {
      await mailService.sendResetPasswordLink(
        email,
        `${process.env.CLIENT_URL}/resetPassword/${activationLink}`
      );
    }
  }

  async updatePassword({ password, activationLink }) {
    const hashPassword = await bcrypt.hash(password, 11);
    const currentUser = await User.findOneAndUpdate({activationLink}, { password: hashPassword })
    const userDto = new UserDto(currentUser);
    const tokens = tokenService.generateTokens({ ...userDto });
    tokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

module.exports = new UserService();
