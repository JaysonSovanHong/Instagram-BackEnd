'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('posts','description',{type: Sequelize.DataTypes.STRING})
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('posts','description')
  }
};
