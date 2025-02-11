import { DataTypes, Model } from "@sequelize/core";
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  Table,
} from "@sequelize/core/decorators-legacy";

@Table({ tableName: "Token" })
export class Token extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id;

  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare refreshToken;
}

// import {Schema, model} from "mongoose";

// const TokenSchema = new Schema({
//     user: {type: Schema.Types.ObjectId, ref: 'User'},
//     refreshToken: {type: String, required: true},
// })

// export const TokenModel=  model('Token', TokenSchema);
