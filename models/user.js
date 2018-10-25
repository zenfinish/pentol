'use strict';
const helpers = require('../helpers/index.js');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
      hooks: {
          beforeCreate(instance) {
              instance.password = helpers.encryptpassword(instance.password);
          }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Warehouse , {through: 'UserTransactions'})
  };
  return User;
};