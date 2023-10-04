const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/connection.js");

// const Fruit = sequelize.define("Fruit", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.DECIMAL(2),
//     allowNull: false,
//   },
// });

class Fruit extends Model {}

Fruit.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(2),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Fruit",
  }
);

module.exports = Fruit;
