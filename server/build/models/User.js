"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
const Token_1 = require("./Token");
class User extends core_1.Model {
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER)
    @decorators_legacy_1.PrimaryKey
    @decorators_legacy_1.AutoIncrement
    id;
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING)
    @decorators_legacy_1.NotNull
    username;
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING)
    @decorators_legacy_1.NotNull
    password;
    @(0, decorators_legacy_1.HasOne)(() => Token_1.Token, "tokenId")
    token;
}
exports.User = User;
// import {Schema, model} from "mongoose";
// const UserSchema = new Schema({
//     email: {type: String, unique: true, required: true},
//     password: {type: String, required: true},
//     isActivated: {type: Boolean, default: false},
//     activationLink: {type: String},
// })
// export const UserModel = model('User', UserSchema);
//# sourceMappingURL=User.js.map