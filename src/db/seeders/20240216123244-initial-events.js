// 'use strict';

// module.exports = (sequelize, DataTypes) => {
//   const Event = sequelize.define('event', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     category: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     location: {
//       type: DataTypes.STRING,
//       // allowNull default is true
//     }
//   }, {
//     freezeTableName: true, // Prevent table name change to plural
//     timestamps: true, // Add createdAt and updatedAt fields
//   });

//   const Organizer = sequelize.define('organizer', {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   }, {
//     freezeTableName: true, // Prevent table name change to plural
//     timestamps: true, // Add createdAt and updatedAt fields
//   });

//   Event.belongsTo(Organizer, { as: 'organizer' });
//   Organizer.hasMany(Event, { as: 'events' });

//   return Event;
// };


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
    await queryInterface.bulkInsert('event', [
      {
        category: 'Music',
        title: 'CMU Music Festival',
        description: 'Music festival at Chiang Mai University',
        location: 'Chiang Mai University Convention Center',
        date: '2024-02-17',
        time: '10:00:00',
        petAllowed: true,
        organizerId: 1
      },
      {
        category: 'Music',
        title: 'CAMT Music Festival',
        description: 'Music festival at College of Arts, Media and Technology',
        location: 'College of Arts, Media and Technology',
        date: '2024-02-17',
        time: '10:00:00',
        petAllowed: true,
        organizerId: 2
      },
      {
        category: 'Music',
        title: 'Chiang Mai Music Festival',
        description: 'Music festival at Chiang Mai',
        location: 'Chiang Mai',
        date: '2024-02-17',
        time: '10:00:00',
        petAllowed: true,
        organizerId: 3
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
  }
};

