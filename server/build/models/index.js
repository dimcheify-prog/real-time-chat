"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const core_1 = require("@sequelize/core");
const sqlite3_1 = require("@sequelize/sqlite3");
const User_js_1 = require("./User.js");
const Token_js_1 = require("./Token.js");
exports.sequelize = new core_1.Sequelize({
    dialect: sqlite3_1.SqliteDialect,
    storage: "sequelize.sqlite",
    models: [User_js_1.User, Token_js_1.Token],
});
//# sourceMappingURL=index.js.map