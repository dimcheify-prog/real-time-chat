"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const core_1 = require("@sequelize/core");
const decorators_legacy_1 = require("@sequelize/core/decorators-legacy");
class Token extends core_1.Model {
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER)
    @decorators_legacy_1.PrimaryKey
    @decorators_legacy_1.AutoIncrement
    id;
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.INTEGER)
    @decorators_legacy_1.NotNull
    userId;
    @(0, decorators_legacy_1.Attribute)(core_1.DataTypes.STRING)
    @decorators_legacy_1.NotNull
    refreshToken;
}
exports.Token = Token;
// import {Schema, model} from "mongoose";
// const TokenSchema = new Schema({
//     user: {type: Schema.Types.ObjectId, ref: 'User'},
//     refreshToken: {type: String, required: true},
// })
// export const TokenModel=  model('Token', TokenSchema);
//# sourceMappingURL=Token.js.map