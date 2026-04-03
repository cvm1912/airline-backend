'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.addConstraint('airports', {
        fields: ['cityId'], //which column we want to add the constraint on
        type: 'foreign key',
        name: 'airportCity', //name of the constraint
        references:{
          table: 'Cities', //table we want to reference
          field: 'id' //column we want to reference
        },
        onDelete: 'cascade', //what happens when the referenced row is deleted
        onUpdate: 'cascade' //what happens when the referenced row is updated
       })
  },



  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('airports', 'airportCity');
  }
};


