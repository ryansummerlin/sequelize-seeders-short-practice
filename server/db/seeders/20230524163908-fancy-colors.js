'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Colors', [
      {
        name: 'purple',
        createdAt: new Date(1999,7, 10)
      },
      {
        name: 'green',
        createdAt: new Date(1999,7, 10)
      },
      {
        name: 'orange',
        createdAt: new Date(1999,7, 10)
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Colors', {
      name: ['purple', 'green', 'orange']
    });
  }
};
