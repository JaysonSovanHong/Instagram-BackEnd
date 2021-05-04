'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [
     {
        name: "Ironman",
        email: "Ironman@Ironman.com",
        password:"Ironman",
        image:"https://i.imgur.com/lJ9crRv.png",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Thor",
        email: "Thor@Thor.com",
        password:"Thor",
        image:"https://i.imgur.com/myHQBef.png",
        createdAt: new Date(),
        updatedAt: new Date()
     },
     {
        name: "Captain America",
        email: "America@America.com",
        password:'America',
        image:"https://i.imgur.com/7LyzKpD.png",
        createdAt: new Date(),
        updatedAt: new Date()
     }
    ])

   await queryInterface.bulkInsert('posts', [
      {
         userId:1,
         image:"https://i.imgur.com/SzR8uX2.png",
         description:"I call this one 'Spirit Fingers'",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         userId:1,
         image:"https://i.imgur.com/l3ItLyl.png",
         description:"Lunch Break",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         userId:2,
         image:"https://i.imgur.com/Q1fh3BB.png",
         description:"The strongest Avengers",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         userId:2,
         image:"https://i.imgur.com/teiiSrL.png",
         description:"Still the strongest Avengers",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         userId:3,
         image:"https://i.imgur.com/RIhG2fi.png",
         description:"Looks who is now worthy",
         createdAt: new Date(),
         updatedAt: new Date()
      },
      {
         userId:3,
         image:"https://i.imgur.com/Q57ScTK.png",
         description:"That is America's Ass",
         createdAt: new Date(),
         updatedAt: new Date()
      },
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};