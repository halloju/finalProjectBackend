'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Cart_item);
    }
  };
  Product.init({
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    category: DataTypes.STRING,
    img_url: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    market_price: DataTypes.INTEGER,
    limited: DataTypes.INTEGER,
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
// npx sequelize-cli db:seed:all