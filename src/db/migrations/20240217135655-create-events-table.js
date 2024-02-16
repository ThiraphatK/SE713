'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('event', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING
        // allowNull defaults to true
      },
      date: {
        type: Sequelize.DATE
        // allowNull defaults to true
      },
      time: {
        type: Sequelize.TIME
        // allowNull defaults to true
      },
      petAllowed: {
        type: Sequelize.BOOLEAN
        // allowNull defaults to true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
    });

    await queryInterface.addColumn('event', 'organizerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'organizer',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('event', 'organizerId');
    await queryInterface.dropTable('event');
  }
};