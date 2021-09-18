'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Discount.init({
    id: DataTypes.INTEGER,
    desc: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    threshold: DataTypes.SMALLINT,
    shipment: DataTypes.SMALLINT,
    is_deleted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};