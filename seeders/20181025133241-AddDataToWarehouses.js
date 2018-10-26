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
   return queryInterface.bulkInsert('Warehouses', [
    {
        name: 'Gudang Emas',
        capacity: 10,
        price: 500000,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Gudang Dokumen',
        capacity: 10,
        price: 300000,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Gudang Makanan',
        capacity: 10,
        price: 100000,
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
   return queryInterface.bulkDelete('Warehouses', null, {});
  }
};
