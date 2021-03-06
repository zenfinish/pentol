'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserTransaction = sequelize.define('UserTransaction', {
    UserId: DataTypes.INTEGER,
    WarehouseId: DataTypes.INTEGER
  }, {});
  UserTransaction.associate = function(models) {
    // associations can be defined here
    UserTransaction.belongsTo(models.User)
    UserTransaction.belongsTo(models.Warehouse)
  };
  return UserTransaction;
};