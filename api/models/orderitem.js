'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Order, { as: 'items', foreignKey: 'orderId' });
      // OrderItem.hasOne(models.MenuItem, { foreignKey: 'menuItemId' });
    }
  }
  OrderItem.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    menuItemId: {
      type: DataTypes.UUID,
      allowNull: false,
      references:{
        model: 'MenuItem',
        key: 'id'
      }
    },
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};