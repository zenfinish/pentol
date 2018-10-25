'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
        {
            name: 'Super Admin',
            email: 'admin@admin.com',
            password: '3476e7c4e480ccdb6dd193f35238640da7aacef993843c2f40f51565ae42818d',
            role: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'Guguk',
            email: 'guguk@guguk.com',
            password: 'd34ac0d690acdd0a72243b6706d38b4be521fc44bc6f8d61c2252ce061df4ede',
            role: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ], {});
},

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
