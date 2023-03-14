'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profession: 'Back end Developer',
        role: 'admin',
        email: 'johnDoe@gmail.com',
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
     },
     {
      name: 'Christianto Ega Prasetyo',
      profession: 'Front end Developer',
      role: 'student',
      email: 'ega@gmail.com',
      password: await bcrypt.hash('rahasia12345555', 10),
      created_at: new Date(),
      updated_at: new Date()
   }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
