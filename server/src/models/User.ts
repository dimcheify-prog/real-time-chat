import { Model, DataTypes } from "@sequelize/core";
import {
  Attribute,
  AutoIncrement,
  HasOne,
  NotNull,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { Token } from "./Token";

@Table({ tableName: "User" })
export class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare username;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password;

  @HasOne(() => Token, "tokenId")
  declare token;
}

// import {Schema, model} from "mongoose";

// const UserSchema = new Schema({
//     email: {type: String, unique: true, required: true},
//     password: {type: String, required: true},
//     isActivated: {type: Boolean, default: false},
//     activationLink: {type: String},
// })

// export const UserModel = model('User', UserSchema);
