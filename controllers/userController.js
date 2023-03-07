"use strict";
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const { generatePassword } = require("../helpers/format");

class UserController {
  static async register(req, res, next) {
    try {
      let { email, password } = req.body;
      const createdUser = await User.create({
        email,
        password,
      });
      res.status(201).json({
        message: "Success Register",
        data: {
          id: createdUser.id,
          email: createdUser.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "InvalidEmail" };
      if (!password) throw { name: "InvalidPassword" };

      const userFound = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!userFound || !comparePassword(password, userFound.password)) {
        throw { name: "InvalidCredentials" };
      }

      const payload = {
        id: userFound.id,
      };

      const access_token = createToken(payload);
      res.status(200).json({
        message: "Success login",
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }

  static async googleSignIn(req, res, next) {
    try {
      const { token_google } = req.headers;
      const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const ticket = await client.verifyIdToken({
        idToken: token_google,
        audience:
          "253349187516-fqfct5q4dtnd31q9a3aas0ndnaj9hmfh.apps.googleusercontent.com", // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();

      const [user, created] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          email: payload.email,
          password: generatePassword(),
        },
        hooks: false,
      });

      const newPlayload = {
        id: user.id,
      };

      const access_token = createToken(newPlayload);
      res.status(200).json({
        access_token: access_token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
