'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('nos', [
        {
        nome: 'A',
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        nome: 'B',
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        nome: 'C',
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        nome: 'D',
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        nome: 'E',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('nos', null, {});
     
  }
};
