'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pontes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      peso: {
        type: Sequelize.INTEGER
      },
      esquerda_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'nos', key: 'id'}
      },
      direita_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'nos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pontes');
  }
};