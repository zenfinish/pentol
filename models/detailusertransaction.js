'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetailUserTransaction = sequelize.define('DetailUserTransaction', {
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
    UserTransactionId: DataTypes.INTEGER
  }, {});
  DetailUserTransaction.associate = function(models) {
    // associations can be defined here
  };
  return DetailUserTransaction;
};