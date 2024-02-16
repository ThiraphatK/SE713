'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('participant', [
      {
        name: 'John Doe',
        telNo: '0812345678'
      },
      {
        name: 'Jane Doe',
        telNo: '0812345679'
      },
      {
        name: 'John Smith',
        telNo: '0812345680'
      }
    ], 
    {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('participant', null, {});
    await queryInterface.bulkDelete('event-participant', null, {});
  }
};
