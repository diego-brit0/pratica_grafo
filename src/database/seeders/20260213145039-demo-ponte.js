'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('pontes', [
        {
        peso: 2,
        esquerda_id:1,
        direita_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        peso: 4,
        esquerda_id:1,
        direita_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        peso: 3,
        esquerda_id:2,
        direita_id:3,
        createdAt: new Date(),
        updatedAt: new Date(),
        },{
        peso: 1,
        esquerda_id:3,
        direita_id:4,
        createdAt: new Date(),
        updatedAt: new Date(),
        }
      ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('pontes', null, {});
     
  }
};
