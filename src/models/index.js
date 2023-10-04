const Category = require("./Category.js");
const Item = require("./Item.js");

Category.belongsToMany(Item, { through: "CategoryItem" });
Item.belongsToMany(Category, { through: "CategoryItem" });

module.exports = { Category, Item };
