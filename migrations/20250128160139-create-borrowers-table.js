'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BorrowersTables', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      BookID: {
        type: Sequelize.UUID
      },
      BorrowerName: {
        type: Sequelize.STRING
      },
      BorrowDate: {
        type: Sequelize.STRING
      },
      ReturnDate: {
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.STRING(11)
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
    await queryInterface.dropTable('BorrowersTables');
  }
};