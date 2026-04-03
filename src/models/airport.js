'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airport extends Model {
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      this.hasMany(models.Flight, {
        foreignKey: 'arrivalAirportId',
        as: 'arrivalFlights',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
      this.hasMany(models.Flight, {
        foreignKey: 'departureAirportId',
        as: 'departureFlights',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      unique: true,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'airport',
  });
  return airport;
};