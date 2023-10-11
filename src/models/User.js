const { DataTypes, Model } = require("sequelize");
const db = require("../../db/connection.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
