const { DataTypes, Model } = require("sequelize");
const db = require("../../db/connection.js");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "Category",
  }
);

module.exports = Category;
