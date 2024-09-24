'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Menus', [
      {
        id: "eab40155-5252-4401-8fa9-7b2dc1f71dfa",
        name: 'Tina\'s Kitchen',
        description: 'Welcome to Tina\'s Kitchen, where culinary excellence meets cozy ambiance. Our menu features a delightful blend of classic favorites and innovative dishes, all crafted with the freshest ingredients.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ebc7287f-b2b6-4a32-bb32-34e5c55af9d6",
        name: 'Jollof Corner',
        description: 'Welcome to Jollof Corner, where culinary excellence meets cozy ambiance. Our menu features a delightful blend of classic favorites and innovative dishes, all crafted with the freshest ingredients.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "353bdd5e-03d4-4018-b33b-eda6d145afe9",
        name: 'Fast burgers',
        description: 'Welcome to Fast Burgers, where culinary excellence meets cozy ambiance. Our menu features a delightful blend of classic favorites and innovative dishes, all crafted with the freshest ingredients.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Menus', null, {});
  }
};
