const userService = require("../service/user.service");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");

class UserController {
  async signUp(req, res, next) {
    try {
      const errors = validationResult(req.body);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Ошибка при валидаци. Проверьте правильность введенных данных.", errors.array())
        );
      };
      await userService.signUp(req.body);
      return res.sendStatus(200);
    } catch (err) {
      next(err);
    }
  }

  async signIn(req, res, next) {
    try {
      const userData = await userService.signIn(req.body);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      const response = {
        user: userData.user,
        accessToken: userData.accessToken,
      };
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async signOut(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.signOut(refreshToken);
      res.clearCookie("refreshToken");
      return res.status(200).json(token);
    } catch (err) {
      next(err);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      const userData = await userService.activate(activationLink);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      const response = {
        user: userData.user,
        accessToken: userData.accessToken,
      };
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      const response = {
        user: userData.user,
        accessToken: userData.accessToken,
      };
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }

  async sendResetPasswordLetter(req, res, next) {
    const {email} = req.body;
    try {
      await userService.sendResetPasswordLetter(email)
      return res.sendStatus(200)
    } catch (err) {
      next(err);
    }
  }

  async updatePassword(req, res, next) {
    try {
      const activationLink = req.params.link;
      const {password} = req.body;
      const userData = await userService.updatePassword({password, activationLink});
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      const response = {
        user: userData.user,
        accessToken: userData.accessToken,
      };
      return res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
