'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Flights', {
      fields: ['airplaneId'],
      type: 'foreign key',
      name: 'flightAirplane',
      references: { table: 'Airplanes', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Flights', {
      fields: ['departureAirportId'],
      type: 'foreign key',
      name: 'flightDepartureAirport',
      references: { table: 'airports', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('Flights', {
      fields: ['arrivalAirportId'],
      type: 'foreign key',
      name: 'flightArrivalAirport',
      references: { table: 'airports', field: 'id' },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Flights', 'flightAirplane');
    await queryInterface.removeConstraint('Flights', 'flightDepartureAirport');
    await queryInterface.removeConstraint('Flights', 'flightArrivalAirport');
  }
};
