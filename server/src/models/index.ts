import { Sequelize } from "@sequelize/core";
import { SqliteDialect } from "@sequelize/sqlite3";
import { User } from "./User.js";
import { Token } from "./Token.js";

export const sequelize = new Sequelize({
  dialect: SqliteDialect,
  storage: "./sequelize.sqlite",
  models: [User, Token],
});
