const { DataTypes, Model } = require("sequelize");
const db = require("../../db/connection.js");

class Item extends Model {}

Item.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "Item",
  }
);

module.exports = Item;
