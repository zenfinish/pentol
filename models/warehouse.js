'use strict';
module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define('Warehouse', {
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  Warehouse.associate = function(models) {
    // associations can be defined here
    Warehouse.belongsToMany(models.User , {through: 'UserTransactions'})
  };
  return Warehouse;
};