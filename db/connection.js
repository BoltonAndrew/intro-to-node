require("dotenv").config();
const { Sequelize } = require("sequelize"); // Import Create Connection Class called Sequelize
const path = require("path");

// Create the DB config
const sequelize = new Sequelize(process.env.DB_URI, {
  dialectOptions: {
    ssl: true,
  },
});

async function testConnection() {
  await sequelize.authenticate();
}

testConnection();

module.exports = sequelize;
