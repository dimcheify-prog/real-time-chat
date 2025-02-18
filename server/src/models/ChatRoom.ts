import {
  Attribute,
  AutoIncrement,
  PrimaryKey,
  Table,
} from "@sequelize/core/decorators-legacy";
import { DataTypes, Model } from "@sequelize/core";

@Table({ tableName: "ChatRoom" })
export class ChatRoom extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id;
}
